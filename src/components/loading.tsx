import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

export const LoadingGIF : React.FC = () => (
    <View style={styles.container}>
        <Image
            source={require('../assets/images/loading.gif')}

            style={styles.image}
        />
    </View>
);

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '60%',
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        alignItems: 'center',
    }
});
