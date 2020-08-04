import React from 'react';
import {View, Button, Modal} from 'react-native';

export const HomeScreen = () : JSX.Element => {
    return (
        <View>
            <Button
                title={'add-order-of-battle'}
                testID={'addOrderOfBattleButton'}
                onPress={() => {null;}}
            />
            <Modal
                visible={false}
            >
                <View testID={'addOrderOfBattleModal'} />
            </Modal>
        </View>
    );
};
