import {OrderOfBattle, defaultOrderOfBattle} from '../types/order-of-battle';
import {CurrentOrderOfBattleActions} from '../actions/current-order-of-battle';
import {SET_CURRENT_ORDER_OF_BATTLE} from '../../constants/action-list';

export const currentOrderOfBattle = (state : OrderOfBattle = defaultOrderOfBattle, action : CurrentOrderOfBattleActions) : OrderOfBattle => {
    switch (action.type) {
    case SET_CURRENT_ORDER_OF_BATTLE:
        return action.payload.currentOrderOfBattle;
    default:
        return state;
    }
};
