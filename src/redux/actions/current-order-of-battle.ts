import {OrderOfBattle} from '../types/order-of-battle';
import {Action} from 'redux';
import {SET_CURRENT_ORDER_OF_BATTLE, SET_CRUSADE_CARDS} from '../../constants/action-list';
import {CrusadeCard} from '../types/crusade-card';

export interface SetCurrentOrderOfBattleAction extends Action<typeof SET_CURRENT_ORDER_OF_BATTLE> {
    payload: {
        currentOrderOfBattle: OrderOfBattle
    }
}

export interface SetCrusadeCardsAction extends Action<typeof SET_CRUSADE_CARDS> {
    payload: {
        crusadeCards: CrusadeCard[]
    }
}

export type CurrentOrderOfBattleActions = SetCurrentOrderOfBattleAction | SetCrusadeCardsAction;
