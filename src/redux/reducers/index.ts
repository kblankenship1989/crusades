import {combineReducers} from 'redux';

import {player} from './player';
import {ordersOfBattle} from './orders-of-battle';
import {Reducer} from 'redux';
import {currentCrusadeCardIndex} from './current-crusade-card-index';

export const rootReducer : Reducer<State, AvailableActions> = combineReducers({
    player,
    ordersOfBattle,
    currentCrusadeCardIndex
});
