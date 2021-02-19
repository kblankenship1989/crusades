import {persistStore, Persistor, PersistConfig, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from './store';
import {rootReducer} from './reducers';
import {Store} from 'redux';

const config : PersistConfig<State, AvailableActions> = {
    key: 'root',
    storage: AsyncStorage,
    debug: true,
    whitelist: [
        'player',
        'ordersOfBattle'
    ]
};

type AppStore = {
    store: Store,
    persistor: Persistor
}


export const persistedRootReducer = persistReducer<State, AvailableActions>(config, rootReducer);


export const configurePersistor = () : AppStore => {
    const store = configureStore(persistedRootReducer);
    const persistor = persistStore(store);

    return {
        store,
        persistor
    };
};
