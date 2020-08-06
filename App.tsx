import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {useColorScheme} from './src/hooks/useColorScheme';
import {MainNavigator} from './src/navigation/main-navigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () : JSX.Element => {
    const colorScheme = useColorScheme();

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <MainNavigator/>
            </NavigationContainer>
            <StatusBar
                style={colorScheme}
            />
        </SafeAreaProvider>
    );
};

export default App;
