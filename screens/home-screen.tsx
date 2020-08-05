import React from 'react';
import {
    View,
    Text,
    FlatList,
    ListRenderItem,
    TouchableOpacity
} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '../types/root-param-list';
import {OrderOfBattle} from '../types/order-of-battle';
import {v4} from 'uuid';


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
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('OrderOfBattleSummary', {orderOfBattle: item})}
        >
            <Text>{item.title}</Text>
        </TouchableOpacity>
    )

    addOrderOfBattle = () :void => {
        const title = this.state.title;
        const orderOfBattle : OrderOfBattle = {
            id: v4(),
            title: title,
            faction: ''
        };

        this.setState({
            ordersOfBattle: this.state.ordersOfBattle.concat(orderOfBattle),
            title: ''
        });

        this.props.navigation.navigate('OrderOfBattleSummary', {orderOfBattle});
    }

    render() : JSX.Element {
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
                        style={{
                            fontSize: 18,
                            margin: 10
                        }}
                    />
                    <TouchableOpacity
                        onPress={this.addOrderOfBattle}
                        disabled={this.state.title === ''}
                        testID={'create-button'}
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            backgroundColor: '#404040',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 30
                        }}
                    >
                        <Icon
                            name={'plus'}
                            type={'font-awesome'}
                            size={18}
                            color={'#8ba4c9'}
                            style={{
                                margin: 10
                            }}
                        />
                        <Text style={{
                            color: '#8ba4c9',
                            fontSize: 18,
                            marginVertical: 10
                        }}>{'Create'}</Text>
                    </TouchableOpacity>
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
