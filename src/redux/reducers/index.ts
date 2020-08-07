import {persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import {ReducersMapObject} from 'redux';

import {player} from './player';
import {State} from '../types/state';
import {ordersOfBattle} from './orders-of-battle';

const config = {
    key: 'root',
    storage,
    debug: true
};
const rootReducers : ReducersMapObject<State, any> = {
    player,
    ordersOfBattle
};

export const rootReducer = persistCombineReducers(config, rootReducers);
