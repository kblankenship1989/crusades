import {OrderOfBattle} from '../../types/state/order-of-battle';
import {OrdersOfBattleAction} from '../actions/orders-of-battle';
import {SET_ORDERS_OF_BATTLE} from '../../constants/action-list';

export const ordersOfBattle = (state: OrderOfBattle[] = [], action: OrdersOfBattleAction) : OrderOfBattle[] => {
    switch (action.type) {
    case SET_ORDERS_OF_BATTLE:
        return action.payload.ordersOfBattle;
    default:
        return state;
    }
};
