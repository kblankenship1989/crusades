import React from 'react';
import {
    View,
    TextInput,
    Text,
    FlatList,
    ListRenderItem,
    TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '../types';


type HomeState = {
    title: string,
    ordersOfBattle: string[]
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

    _orderOfBattleRenderItem : ListRenderItem<string> = ({item}) : JSX.Element => (
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('OrderOfBattleSummary', {title: item})}
        >
            <Text>{item}</Text>
        </TouchableOpacity>
    )

    addOrderOfBattle = () :void => {
        const title = this.state.title;

        this.setState({
            ordersOfBattle: this.state.ordersOfBattle.concat(this.state.title),
            title: ''
        });

        this.props.navigation.navigate('OrderOfBattleSummary', {title});
    }

    render() : JSX.Element {
        return (
            <View>
                <View>
                    <TextInput
                        placeholder={'Title'}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}
                    />
                    <TouchableOpacity
                        onPress={this.addOrderOfBattle}
                        disabled={this.state.title === ''}
                        testID={'create-button'}
                    >
                        <Icon
                            name={'plus'}
                            type={'font-awesome'}
                            size={24}
                        />
                        <Text>{'Create'}</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    renderItem={this._orderOfBattleRenderItem}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.ordersOfBattle}
                />
            </View>
        );
    }
}
