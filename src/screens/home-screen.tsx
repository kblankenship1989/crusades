import React from 'react';
import {
    View,
    FlatList,
    ListRenderItem,
    Picker
} from 'react-native';
import {Icon, Input, Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '../types/root-param-list';
import {appStyles} from '../../styles';
import {getColorScheme} from '../helpers/getColorScheme';
import {OrderOfBattle, defaultOrderOfBattle} from '../redux/types/order-of-battle';
import {homeScreenConnector} from './home-screen-connector';
import {ConnectedProps} from 'react-redux';
import {Factions, factions} from '../types/consts';


type HomeState = {
    title: string,
    faction: Factions,
    ordersOfBattle: OrderOfBattle[]
}

export type HomeProps = ConnectedProps<typeof homeScreenConnector> & {
    navigation: StackNavigationProp<RootParamList, 'Home'>
}

export class HomeScreen extends React.Component<HomeProps, HomeState> {
    constructor(props : HomeProps) {
        super(props);

        this.state = {
            title: '',
            faction: factions[0],
            ordersOfBattle: []
        };
    }

    _orderOfBattleRenderItem : ListRenderItem<OrderOfBattle> = ({item}) : JSX.Element => (
        <Button
            onPress={() => this.props.navigation.navigate('OrderOfBattleSummary')}
            title={item.title}
        />
    )

    addOrderOfBattle = () :void => {
        const title = this.state.title;
        const orderOfBattle : OrderOfBattle = {
            ...defaultOrderOfBattle,
            title
        };

        this.setState({
            ordersOfBattle: this.state.ordersOfBattle.concat(orderOfBattle),
            title: ''
        });

        this.props.navigation.navigate('OrderOfBattleSummary');
    }

    render() : JSX.Element {
        const colorScheme = getColorScheme();
        const styles = appStyles(colorScheme);

        return (
            <View>
                <View>
                    <Input
                        leftIcon={
                            <Icon
                                size={18}
                                name={'format-title'}
                                type={'material-community'}
                            />
                        }
                        placeholder={'Title'}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}
                        style={styles.textInput}
                    />
                    <View style={styles.pickerRow}>
                        <Icon
                            size={18}
                            name={'sword-cross'}
                            type={'material-community'}
                        />
                        <Picker
                            style={styles.picker}
                            selectedValue={factions.indexOf(this.state.faction)}
                            onValueChange={(selectedValue : number) => this.setState({faction: factions[selectedValue]})}
                        >
                            {factions.map((faction, index) => (
                                <Picker.Item
                                    label={faction}
                                    value={index}
                                    key={faction}
                                />
                            ))}
                        </Picker>
                    </View>
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
                        title={'Create'}
                    />
                </View>
                <FlatList
                    renderItem={this._orderOfBattleRenderItem}
                    keyExtractor={(item : OrderOfBattle) => item.title}
                    data={this.state.ordersOfBattle}
                />
            </View>
        );
    }
}
