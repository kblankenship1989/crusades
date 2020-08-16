import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {LoadingGIF} from '../components/loading';
import {configurePersistor} from '../redux/persistor';

type ProviderProps = {
    children: JSX.Element
}

export const AppProvider = (props : ProviderProps) : JSX.Element => {
    const {
        store,
        persistor
    } = configurePersistor();

    return (
        <Provider store={store}>
            <PersistGate
                loading={<LoadingGIF/>}
                persistor={persistor}
            >{props.children}</PersistGate>
        </Provider>
    );
};
