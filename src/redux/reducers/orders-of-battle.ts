import {OrderOfBattle} from '../types/order-of-battle';
import {OrdersOfBattleAction} from '../actions/orders-of-battle';
import {ADD_ORDER_OF_BATTLE, LOAD_CURRENT_ORDER_OF_BATTLE, DELETE_ORDER_OF_BATTLE} from '../../constants/action-list';

const addOrderOfBattle = (state: OrderOfBattle[], newOrderOfBattle: OrderOfBattle) : OrderOfBattle[] => ([
    newOrderOfBattle,
    ...state
]);

const updateOrdersOfBattle = (state: OrderOfBattle[], ordersOfBattle: OrderOfBattle[]) : OrderOfBattle[] => ([
    ...ordersOfBattle
]);

export const ordersOfBattle = (state: OrderOfBattle[] = [], action: OrdersOfBattleAction) : OrderOfBattle[] => {
    switch (action.type) {
    case ADD_ORDER_OF_BATTLE:
        return addOrderOfBattle(state, action.payload.currentOrderOfBattle);
    case DELETE_ORDER_OF_BATTLE:
    case LOAD_CURRENT_ORDER_OF_BATTLE:
        return updateOrdersOfBattle(state, action.payload.ordersOfBattle);
    default:
        return state;
    }
};
