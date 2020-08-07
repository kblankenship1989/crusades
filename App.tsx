import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {useColorScheme} from './src/hooks/useColorScheme';
import {MainNavigator} from './src/navigation/main-navigator';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {configureStore} from './src/redux/store';

const App = () : JSX.Element => {
    const colorScheme = useColorScheme();
    const {
        store,
        persistor
    } = configureStore();

    return (
        <Provider store={store}>
            <PersistGate
                loading={'...Loading'}
                persistor={persistor}
            >
                <SafeAreaProvider>
                    <NavigationContainer>
                        <MainNavigator/>
                    </NavigationContainer>
                    <StatusBar
                        style={colorScheme}
                    />
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
