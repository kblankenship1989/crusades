import {combineReducers} from 'redux';

import {player} from './player';
import {ordersOfBattle} from './orders-of-battle';
import {currentOrderOfBattle} from './current-order-of-battle';
import {Reducer} from 'redux';
import {State} from '../../types/state';
import {AvailableActions} from '../actions';
import {currentCrusadeCard} from './current-crusade-card';

export const rootReducer : Reducer<State, AvailableActions> = combineReducers({
    player,
    ordersOfBattle,
    currentOrderOfBattle,
    currentCrusadeCard
});
