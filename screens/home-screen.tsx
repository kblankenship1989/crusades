import React from 'react';
import {
    View,
    FlatList,
    ListRenderItem,
    StyleSheet,
    Appearance
} from 'react-native';
import {Icon, Input, Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '../types/root-param-list';
import {OrderOfBattle} from '../types/order-of-battle';
import {v4} from 'uuid';
import {appStyles} from '../styles';
import {getColorScheme} from '../helpers/getColorScheme';


type HomeState = {
    title: string,
    ordersOfBattle: OrderOfBattle[]
}

type HomeProps = {
    navigation: StackNavigationProp<RootParamList, 'Home'>
}

export class HomeScreen extends React.Component<HomeProps, HomeState> {
    constructor(props : HomeProps) {
        super(props);

        this.state = {
            title: '',
            ordersOfBattle: []
        };
    }

    _orderOfBattleRenderItem : ListRenderItem<OrderOfBattle> = ({item}) : JSX.Element => (
        <Button
            onPress={() => this.props.navigation.navigate('OrderOfBattleSummary', {orderOfBattle: item})}
            title={item.title}
        />
    )

    addOrderOfBattle = () :void => {
        const title = this.state.title;
        const orderOfBattle : OrderOfBattle = {
            id: v4(),
            title: title,
            faction: '',
            requisitionPoints: 5
        };

        this.setState({
            ordersOfBattle: this.state.ordersOfBattle.concat(orderOfBattle),
            title: ''
        });

        this.props.navigation.navigate('OrderOfBattleSummary', {orderOfBattle});
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
                    keyExtractor={(item : OrderOfBattle) => item.id}
                    data={this.state.ordersOfBattle}
                />
            </View>
        );
    }
}
