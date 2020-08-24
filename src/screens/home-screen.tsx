import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Icon, Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '../navigation/root-param-list';
import {getColorScheme} from '../helpers/getColorScheme';
import {homeScreenConnector} from './home-screen-connector';
import {ConnectedProps} from 'react-redux';
import {Factions, factions} from '../types/consts';
import {FactionPicker} from '../components/faction-picker';
import {TitleInput} from '../components/title-input';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OrderOfBattleListItem} from '../components/order-of-battle-list-item';
import {SwipeOutDeleteRight} from '../components/swipe-out-delete-right';


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

    selectOrderOfBattle = (index: number) : void => {
        this.props.loadSelectedOrderOfBattle(index);
        this.props.navigation.push('OrderOfBattleSummary');
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
                    <SwipeListView
                        renderItem={OrderOfBattleListItem({selectOrderOfBattle: this.selectOrderOfBattle})}
                        renderHiddenItem={SwipeOutDeleteRight({onDelete: this.props.deleteSelectedOrderOfBattle})}
                        keyExtractor={(orderOfBattle) => orderOfBattle.title}
                        data={this.props.ordersOfBattle}
                        rightOpenValue={-75}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
