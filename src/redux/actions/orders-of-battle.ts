import {OrderOfBattle} from '../types/order-of-battle';
import {Action, AnyAction} from "redux";
import {ADD_ORDER_OF_BATTLE} from '../../constants/action-list';

interface AddOrderOfBattle extends Action<typeof ADD_ORDER_OF_BATTLE> {
    payload: OrderOfBattle
}

export type OrdersOfBattleAction = AddOrderOfBattle | AnyAction;
