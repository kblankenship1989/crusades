import {OrderOfBattle} from '../types/order-of-battle';
import {LOAD_CURRENT_ORDER_OF_BATTLE} from '../../constants/action-list';
import {Action, AnyAction} from 'redux';

interface LoadCurrentOrderOfBattle extends Action<typeof LOAD_CURRENT_ORDER_OF_BATTLE> {
    payload: OrderOfBattle
}

export type LoadCurrentOrderOfBattleActions = LoadCurrentOrderOfBattle | AnyAction;
