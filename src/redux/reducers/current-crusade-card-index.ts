import {ActionList} from '../../types/enums';

export const currentCrusadeCardIndex = (state = 0, action : CurrentCrusadeCardIndexActions) : number => {
    switch (action.type) {
    case ActionList.SET_CURRENT_CRUSADE_CARD_INDEX:
        return action.payload.currentCrusadeCardIndex;
    default:
        return state;
    }
};
