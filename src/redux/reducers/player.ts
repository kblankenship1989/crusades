import {ActionList} from '../../types/enums';
import {defaultPlayer} from '../state/player';

const updatePlayer = (state : Player, payload : Partial<Player>) : Player => ({
    ...state,
    ...payload
});

export const player = (state : Player = defaultPlayer, action : PlayerAction) : Player => {
    switch (action.type) {
    case ActionList.UPDATE_PLAYER:
        return updatePlayer(state, action.payload);
    default:
        return state;
    }
};
