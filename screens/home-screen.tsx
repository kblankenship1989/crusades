import React from 'react';
import {View, Button, Modal, TextInput, Text, ColorSchemeName, FlatList} from 'react-native';

type HomeState = {
    isModalOpen: boolean
}

type HomeProps = {
    colorScheme: ColorSchemeName
}

export class HomeScreen extends React.Component<HomeProps, HomeState> {
    constructor(props : HomeProps) {
        super(props);

        this.state = {
            isModalOpen: false
        };
    }

    toggleModal = () : void => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() : JSX.Element {
        return (
            <View>
                <Button
                    title={'add-order-of-battle'}
                    onPress={() => null}
                    testID={'add-order-of-battle-button'}
                >
                    <Text>{'Add'}</Text>
                </Button>
                <FlatList
                    renderItem={null}
                    keyExtractor={(item, index) => index.toString()}
                    data={null}
                />
                <Modal
                    visible={this.state.isModalOpen}
                >
                    <View>
                        <TextInput
                            placeholder={'Title'}
                            onChangeText={() => null}
                            value={''}
                        />
                        <Button
                            title={'create-order-of-battle'}
                            onPress={() => null}
                            testID={'create-order-of-battle-button'}
                        >
                            <Text>{'Create'}</Text>
                        </Button>
                    </View>
                </Modal>
            </View>
        );
    }
}
