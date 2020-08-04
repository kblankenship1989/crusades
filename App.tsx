import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {HomeScreen} from './screens/home-screen';
import {useColorScheme} from './hooks/useColorScheme';

const colorScheme = useColorScheme();

export const App = () : JSX.Element => (
    <SafeAreaProvider>
        <HomeScreen
            colorScheme={colorScheme}
        />
        <StatusBar 
            style={colorScheme}
        />
    </SafeAreaProvider>
);
