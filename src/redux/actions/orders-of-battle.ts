import {OrderOfBattle} from '../types/order-of-battle';
import {Action, AnyAction} from 'redux';
import {ADD_ORDER_OF_BATTLE, LOAD_CURRENT_ORDER_OF_BATTLE, DELETE_ORDER_OF_BATTLE} from '../../constants/action-list';

type Payload = {
    currentOrderOfBattle?: OrderOfBattle
    ordersOfBattle?: OrderOfBattle[]
}

export interface AddOrderOfBattle extends Action<typeof ADD_ORDER_OF_BATTLE> {
    payload: Payload
}

export interface LoadCurrentOrderOfBattle extends Action<typeof LOAD_CURRENT_ORDER_OF_BATTLE> {
    payload: Payload
}

export interface DeleteOrderOfBattle extends Action<typeof DELETE_ORDER_OF_BATTLE> {
    payload: Payload
}

export type OrdersOfBattleAction = AddOrderOfBattle | LoadCurrentOrderOfBattle | DeleteOrderOfBattle | AnyAction;
