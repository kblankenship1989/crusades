import React from 'react';
import {
    View,
    Button,
    TextInput,
    Text,
    ColorSchemeName,
    FlatList,
    ListRenderItem
} from 'react-native';


type HomeState = {
    title: string,
    ordersOfBattle: string[]
}

type HomeProps = {
    colorScheme: ColorSchemeName
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
        <Text>{item}</Text>
    )

    addOrderOfBattle = () :void => {
        this.setState({
            ordersOfBattle: this.state.ordersOfBattle.concat(this.state.title),
            title: ''
        });
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
                    <Button
                        title={'create-order-of-battle'}
                        onPress={this.addOrderOfBattle}
                        testID={'create-order-of-battle-button'}
                    >
                        <Text>{'Create'}</Text>
                    </Button>
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
