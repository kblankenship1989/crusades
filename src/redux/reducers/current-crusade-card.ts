import {CrusadeCard, defaultCrusadeCard} from '../types/crusade-card';
import {CurrentCrusadeCardActions} from '../actions/current-crusade-card';
import {SET_CURRENT_CRUSADE_CARD} from '../../constants/action-list';

export const currentCrusadeCard = (state: CrusadeCard = defaultCrusadeCard, action : CurrentCrusadeCardActions) : CrusadeCard => {
    switch (action.type) {
    case SET_CURRENT_CRUSADE_CARD:
        return action.payload.currentCrusadeCard;
    default:
        return state;
    }
};
