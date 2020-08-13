import React from 'react';
import {
    View,
    FlatList,
    ListRenderItem,
    Text
} from 'react-native';
import {Icon, Button, ListItem} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '../types/root-param-list';
import {appStyles} from '../../styles';
import {getColorScheme} from '../helpers/getColorScheme';
import {OrderOfBattle} from '../redux/types/order-of-battle';
import {homeScreenConnector} from './home-screen-connector';
import {ConnectedProps} from 'react-redux';
import {Factions, factions} from '../types/consts';
import {FactionPicker} from '../components/faction-picker';
import {TitleInput} from '../components/title-input';
import {Icons40k, factionsIconMap} from '../configs/40k-icons';


type HomeState = {
    title: string,
    faction: Factions
}

export type HomeProps = ConnectedProps<typeof homeScreenConnector> & {
    navigation: StackNavigationProp<RootParamList, 'Home'>
}

export class HomeScreen extends React.Component<HomeProps, HomeState> {
    constructor(props : HomeProps) {
        super(props);

        this.state = {
            title: '',
            faction: factions[0]
        };
    }

    _orderOfBattleRenderItem : ListRenderItem<OrderOfBattle> = ({item}) : JSX.Element => {
        const IconToRender = factionsIconMap[item.faction];

        return (
            <ListItem
                leftAvatar={<IconToRender
                    size={18}
                    color={'#8ba4c9'}
                />}
                onPress={() => this.props.navigation.navigate('OrderOfBattleSummary')}
                title={`${item.title} (${item.faction})`}
            />
        );
    }

    addOrderOfBattle = () :void => {
        this.props.createOrderOfBattle(this.state.title, this.state.faction);
        this.setState({
            title: '',
            faction: factions[0]
        });

        this.props.navigation.navigate('OrderOfBattleSummary');
    }

    render() : JSX.Element {
        const colorScheme = getColorScheme();
        const styles = appStyles(colorScheme);

        return (
            <View>
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
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonTitle}
                    />
                </View>
                <FlatList
                    renderItem={this._orderOfBattleRenderItem}
                    keyExtractor={(item : OrderOfBattle) => item.title}
                    data={this.props.ordersOfBattle}
                    ListHeaderComponent={<Text>{'Saved Orders of Battle'}</Text>}
                />
            </View>
        );
    }
}
