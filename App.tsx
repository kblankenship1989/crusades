import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MainNavigator } from './navigation/main-navigator';
import { HomeScreen } from './screens/home-screen';

export const App = () : JSX.Element => (
    <SafeAreaProvider>
        <HomeScreen/>
        <StatusBar />
    </SafeAreaProvider>
)
