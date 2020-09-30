import {Action} from 'redux';
import {SET_CURRENT_CRUSADE_CARD} from '../../constants/action-list';
import {CurrentCrusadeCard} from '../../types/state/crusade-card';

export interface SetCurrentCursadeCardAction extends Action<typeof SET_CURRENT_CRUSADE_CARD> {
    payload: {
        currentCrusadeCard: CurrentCrusadeCard
    }
}

export type CurrentCrusadeCardActions = SetCurrentCursadeCardAction;
