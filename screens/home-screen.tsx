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
    isModalOpen: boolean,
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
            isModalOpen: false,
            title: '',
            ordersOfBattle: []
        };
    }

    toggleModal = () : void => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    _orderOfBattleRenderItem : ListRenderItem<string> = ({item}) : JSX.Element => (
        <Text>{item}</Text>
    )

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
                        onPress={() => this.setState({title: ''})}
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
