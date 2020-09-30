import {persistStore, Persistor, PersistConfig, persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import {configureStore} from './store';
import {State} from '../types/state';
import {AvailableActions} from './actions';
import {rootReducer} from './reducers';
import {Store} from 'redux';

const config : PersistConfig<State, AvailableActions> = {
    key: 'root',
    storage,
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
