import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import {combineReducers} from 'redux';

import {player} from './player';
import {ordersOfBattle} from './orders-of-battle';

const config = {
    key: 'root',
    storage,
    debug: true
};
const rootReducers = combineReducers({
    player,
    ordersOfBattle
});

export const rootReducer = persistReducer(config, rootReducers);
