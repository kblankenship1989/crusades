import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import {combineReducers} from 'redux';

import {player} from './player';
import {ordersOfBattle} from './orders-of-battle';
import {currentOrderOfBattle} from './current-order-of-battle';
import {Reducer} from 'redux';
import {State} from '../types/state';
import {AvailableActions} from '../actions';

const config = {
    key: 'root',
    storage,
    debug: true
};
const rootReducers : Reducer<State, AvailableActions> = combineReducers({
    player,
    ordersOfBattle,
    currentOrderOfBattle
});

export const rootReducer = persistReducer<State, AvailableActions>(config, rootReducers);
