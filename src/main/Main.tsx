import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainNavigator} from '../navigation/main-navigator';
import {StatusBar} from 'expo-status-bar';
import {useColorScheme} from '../hooks/useColorScheme.web';

export const Main = () : JSX.Element => {
    const colorScheme = useColorScheme();

    return (
        <SafeAreaProvider>
            <MainNavigator/>
            <StatusBar
                style={colorScheme}
            />
        </SafeAreaProvider>
    );
};
