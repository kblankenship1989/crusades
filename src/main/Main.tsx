import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {useColorScheme} from '../hooks/useColorScheme.web';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainNavigatorConnector} from '../navigation/main-navigator-connector';

export const Main = () : JSX.Element => {
    const colorScheme = useColorScheme();

    return (
        <SafeAreaProvider>
            <MainNavigatorConnector/>
            <StatusBar
                style={colorScheme}
            />
        </SafeAreaProvider>
    );
};
