import {OrderOfBattle} from '../types/order-of-battle';
import {OrdersOfBattleAction} from '../actions/orders-of-battle';
import {ADD_ORDER_OF_BATTLE} from '../../constants/action-list';

const addOrderOfBattle = (state: OrderOfBattle[] = [], payload: OrderOfBattle) : OrderOfBattle[] => ([
    payload,
    ...state
]);

export const ordersOfBattle = (state: OrderOfBattle[] = [], action: OrdersOfBattleAction) : OrderOfBattle[] => {
    switch (action.type) {
    case ADD_ORDER_OF_BATTLE:
        return addOrderOfBattle(state, action.payload);
    default:
        return state;
    }
};
