import {OrderOfBattle} from '../types/order-of-battle';
import {Action} from 'redux';
import {SET_ORDERS_OF_BATTLE} from '../../constants/action-list';

export interface SetOrdersOfBattleAction extends Action<typeof SET_ORDERS_OF_BATTLE> {
    payload: {
        ordersOfBattle: OrderOfBattle[]
    }
}

export type OrdersOfBattleAction = SetOrdersOfBattleAction;
