import {combineReducers, Reducer} from 'redux';

import {title} from './title';
import {faction} from './faction';
import {requisitionPoints} from './requisition-points';
import {OrderOfBattle} from '../../types/order-of-battle';
import {LoadCurrentOrderOfBattleActions} from '../../actions/load-current-order-of-battle';

export const currentOrderOfBattle : Reducer<OrderOfBattle, LoadCurrentOrderOfBattleActions> = combineReducers({
    title,
    faction,
    requisitionPoints
}) ;
