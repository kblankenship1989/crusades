import React from 'react';
import {
    View,
    FlatList,
    ListRenderItem,
    Text,
    ScrollView,
    Alert
} from 'react-native';
import Swipeout, {SwipeoutButtonProperties} from 'react-native-swipeout';
import {Icon, Button, ListItem, Card} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '../navigation/root-param-list';
import {appStyles} from '../../styles';
import {getColorScheme} from '../helpers/getColorScheme';
import {OrderOfBattle} from '../redux/types/order-of-battle';
import {homeScreenConnector} from './home-screen-connector';
import {ConnectedProps} from 'react-redux';
import {Factions, factions} from '../types/consts';
import {FactionPicker} from '../components/faction-picker';
import {TitleInput} from '../components/title-input';
import {factionsIconMap} from '../configs/40k-icons';
import {SafeAreaView} from 'react-native-safe-area-context';


type HomeState = {
    title: string,
    faction: Factions
}

export type HomeProps = ConnectedProps<typeof homeScreenConnector> & {
    navigation: StackNavigationProp<RootParamList, 'Home'>
}

export class HomeScreen extends React.Component<HomeProps, HomeState> {
    prompDeleteOrderOfBattle = (title: string, index: number): void => {
        console.log(title, index);
        Alert.alert(
            'Delete Order Of Battle?',
            `Are you sure you want to delete: ${title}?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => this.props.deleteSelectedOrderOfBattle(index)
                }
            ],
            {
                cancelable: false
            }
        );
    }
    constructor(props : HomeProps) {
        super(props);

        this.state = {
            title: '',
            faction: factions[0]
        };
    }

    selectOrderOfBattle = (index: number) : void => {
        this.props.loadSelectedOrderOfBattle(index);
        this.props.navigation.push('OrderOfBattleSummary');
    }

    _orderOfBattleRenderItem : ListRenderItem<OrderOfBattle> = ({item, index}) : JSX.Element => {
        const IconToRender = factionsIconMap[item.faction];

        const rightButtons : SwipeoutButtonProperties[] = [
            {
                text:'Delete',
                type:'delete',
                onPress: () => this.prompDeleteOrderOfBattle(item.title, index)
            }
        ];

        return (
            <Swipeout
                right={rightButtons}
                autoClose={true}
                onOpen={(section, item, direction) => {
                    console.log(section, item, direction);
                }}
            >
                <ListItem
                    leftAvatar={<IconToRender
                        size={18}
                        color={'#8ba4c9'}
                    />}
                    onPress={() => this.selectOrderOfBattle(index)}
                    onLongPress={() => this.prompDeleteOrderOfBattle(item.title, index)}
                    title={item.title}
                    bottomDivider
                    testID={item.title}
                />
            </Swipeout>
        );
    }

    addOrderOfBattle = () :void => {
        this.props.createOrderOfBattle(this.state.title, this.state.faction);
        this.setState({
            title: '',
            faction: factions[0]
        });

        this.props.navigation.push('OrderOfBattleSummary');
    }

    render() : JSX.Element {
        const colorScheme = getColorScheme();
        const styles = appStyles(colorScheme);

        return (
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <TitleInput
                            value={this.state.title}
                            onChangeText={(title) => this.setState({title})}
                            placeholder={'Order Of Battle'}
                        />
                        <FactionPicker
                            selectedFaction={this.state.faction}
                            onValueChange={(itemValue, itemIndex) => this.setState({faction: factions[itemIndex]})}
                        />
                        <Button
                            onPress={this.addOrderOfBattle}
                            disabled={this.state.title === ''}
                            testID={'create-button'}
                            icon={<Icon
                                name={'plus'}
                                type={'font-awesome'}
                                size={18}
                                color={colorScheme === 'light' ? '#8ba4c9' : '#404040'}
                            />}
                        />
                    </View>
                    <Card>
                        <FlatList
                            renderItem={this._orderOfBattleRenderItem}
                            keyExtractor={(item : OrderOfBattle) => item.title}
                            data={this.props.ordersOfBattle}
                        />
                    </Card>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
