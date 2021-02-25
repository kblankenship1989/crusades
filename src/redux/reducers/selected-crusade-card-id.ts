import {SelectCrusadeCardAction, CreateCrusadeCardAction} from '../action-creators/crusade-cards';
import {AvailableActions} from '../action-list';
import {AnyAction} from 'redux';

type SelectedCrusadeCardIdActions = SelectCrusadeCardAction | CreateCrusadeCardAction | AnyAction

export const selectedCrusadeCardId = (state: string | null = null, action : SelectedCrusadeCardIdActions) : string | null => {
    return action.type === AvailableActions.SELECT_CRUSADE_CARD
        || action.type === AvailableActions.CREATE_CRUSADE_CARD ?
        action.payload.selectedCrusadeCardId :
        state;
};
