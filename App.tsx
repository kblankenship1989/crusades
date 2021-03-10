import React from 'react';

import {LoadingGIF} from './src/components/loading';
import {AppProvider} from './src/main/AppProvider';
import {Main} from './src/main/Main';
import getTheme from './src/themes';
import {Root, StyleProvider} from 'native-base';
import {useFonts} from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

const App = () : JSX.Element => {
    const [loaded, error] = useFonts({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font
    });

    if (!loaded) {
        return <LoadingGIF/>;
    }
    return (
        <Root>
            <StyleProvider style={getTheme()}>
                <AppProvider>
                    <Main/>
                </AppProvider>
            </StyleProvider>
        </Root>
    );
};

export default App;
