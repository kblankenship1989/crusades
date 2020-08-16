import {createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import {Reducer} from 'react';
import {AvailableActions} from './actions';

export const configureStore = (rootReducer : Reducer<any, AvailableActions>) : Store => createStore(
    rootReducer,
    applyMiddleware(thunk)
);

