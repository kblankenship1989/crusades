import {State} from './state/index';
import {createStore, applyMiddleware, Store, AnyAction, Reducer, Action} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {PersistPartial} from 'redux-persist/es/persistReducer';

export const configureStore = (rootReducer : Reducer<State & PersistPartial, AnyAction>) : Store => createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    State & PersistPartial,
    unknown,
    Action<string>
>
