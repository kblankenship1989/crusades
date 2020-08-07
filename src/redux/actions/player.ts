import {Player} from './../types/player';
import {UPDATE_PLAYER} from './../../constants/action-list';
import {Action} from 'redux';

interface UpdatePlayer extends Action<typeof UPDATE_PLAYER> {
    payload: Partial<Player>
}

export type PlayerAction = UpdatePlayer;
