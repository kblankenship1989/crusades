import {persistStore, Persistor, PersistConfig, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from './store';
import {rootReducer} from './reducers';
import {Store, AnyAction} from 'redux';
import {State} from './state';

const config : PersistConfig<State, AnyAction> = {
    key: 'root',
    storage: AsyncStorage,
    debug: true,
    whitelist: [
        // 'accounts',
        // 'selectedAccountId'
    ]
};

type AppStore = {
    store: Store,
    persistor: Persistor
}


export const persistedRootReducer = persistReducer<State, AnyAction>(config, rootReducer);


export const configurePersistor = () : AppStore => {
    const store = configureStore(persistedRootReducer);
    const persistor = persistStore(store);

    return {
        store,
        persistor
    };
};
