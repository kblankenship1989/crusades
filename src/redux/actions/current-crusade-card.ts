import {Action} from 'redux';
import {SET_CURRENT_CRUSADE_CARD} from '../../constants/action-list';
import {CrusadeCard} from '../types/crusade-card';

export interface SetCurrentCursadeCardAction extends Action<typeof SET_CURRENT_CRUSADE_CARD> {
    payload: {
        currentCrusadeCard: CrusadeCard
    }
}

export type CurrentCrusadeCardActions = SetCurrentCursadeCardAction;
