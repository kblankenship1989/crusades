import {Player, defaultPlayer} from "../types/player";
import {PlayerAction} from "../actions/player";
import {UPDATE_PLAYER} from "../../constants/action-list";

const updatePlayer = (state : Player, payload : Partial<Player>) : Player => ({
    ...state,
    ...payload
});

export const player = (state : Player = defaultPlayer, action : PlayerAction) : Player => {
    switch (action.type) {
    case UPDATE_PLAYER:
        return updatePlayer(state, action.payload);
    default:
        return state;
    }
};
