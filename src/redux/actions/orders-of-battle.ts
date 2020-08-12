import {OrderOfBattle} from '../types/order-of-battle';
import {Action, AnyAction} from 'redux';
import {ADD_ORDER_OF_BATTLE, LOAD_CURRENT_ORDER_OF_BATTLE} from '../../constants/action-list';

export interface AddOrderOfBattle extends Action<typeof ADD_ORDER_OF_BATTLE> {
    payload: OrderOfBattle
}

export interface LoadCurrentOrderOfBattle extends Action<typeof LOAD_CURRENT_ORDER_OF_BATTLE> {
    payload: OrderOfBattle
}

export type OrdersOfBattleAction = AddOrderOfBattle | LoadCurrentOrderOfBattle | AnyAction;
