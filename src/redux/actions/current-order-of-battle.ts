import {OrderOfBattle} from '../../types/state/order-of-battle';
import {Action} from 'redux';
import {SET_CURRENT_ORDER_OF_BATTLE} from '../../constants/action-list';

export interface SetCurrentOrderOfBattleAction extends Action<typeof SET_CURRENT_ORDER_OF_BATTLE> {
    payload: {
        currentOrderOfBattle: OrderOfBattle
    }
}

export type CurrentOrderOfBattleActions = SetCurrentOrderOfBattleAction;
