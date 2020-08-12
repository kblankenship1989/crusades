import {createStore, applyMiddleware, Store} from 'redux';
import {persistStore, Persistor} from 'redux-persist';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';

type AppStore = {
    persistor: Persistor,
    store: Store
}

export const configureStore = () : AppStore => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    const persistor = persistStore(store);

    return {
        persistor,
        store
    };
};

