import React from 'react';

import {useCachedResources} from './hooks/useCachedResources';

import {LoadingGIF} from './components/loading';
import {AppProvider} from './main/AppProvider';
import {Main} from './main/Main';

export const App = () : JSX.Element => {
    const loaded = useCachedResources();

    if (!loaded) {
        return <LoadingGIF/>;
    }
    return (
        <AppProvider>
            <Main/>
        </AppProvider>
    );
};
