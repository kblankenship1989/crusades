import React from 'react';

import {useCachedResources} from './src/hooks/useCachedResources';

import {LoadingGIF} from './src/components/loading';
import {AppProvider} from './src/main/AppProvider';
import {Main} from './src/main/Main';
import getTheme from './native-base-theme/components';
import {StyleProvider} from 'native-base';
import {useFonts} from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

const App = () : JSX.Element => {
    // const loaded = useCachedResources();

    const [loaded, error] = useFonts({
        Roboto: require('./src/assets/Fonts/Roboto.ttf'),
        Roboto_medium: require('./src/assets/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font
    });

    if(error) {
        console.log(error);
    }

    if (!loaded) {
        return <AppLoading/>;
    }
    return (
        <StyleProvider style={getTheme()}>
            <AppProvider>
                <Main/>
            </AppProvider>
        </StyleProvider>
    );
};

export default App;
