import {NativeBaseProvider} from 'native-base';
import React from 'react';

import {AppProvider} from './src/main/AppProvider';
import {Main} from './src/main/Main';

const App = () : JSX.Element => {
    return (
        <NativeBaseProvider>
            <AppProvider>
                <Main/>
            </AppProvider>
        </NativeBaseProvider>
    );
};

export default App;
