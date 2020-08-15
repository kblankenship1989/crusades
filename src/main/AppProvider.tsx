import React from 'react';
import {configureStore} from '../redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {LoadingGIF} from '../components/loading';

type ProviderProps = {
    children: JSX.Element
}

export const AppProvider = (props : ProviderProps) : JSX.Element => {
    const {
        store,
        persistor
    } = configureStore();

    return (
        <Provider store={store}>
            <PersistGate
                loading={<LoadingGIF/>}
                persistor={persistor}
            >{props.children}</PersistGate>
        </Provider>
    );
};
