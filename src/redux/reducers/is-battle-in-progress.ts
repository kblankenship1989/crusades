import {AvailableActions} from '../action-list';
import {AnyAction} from 'redux';
import {SetBattleInProgressAction} from '../action-creators/is-battle-in-progress';

type IsBattleInProgressActions = SetBattleInProgressAction | AnyAction

export const isBattleInProgress = (state = false, action : IsBattleInProgressActions) : boolean => {
    return action.type === AvailableActions.SET_BATTLE_IN_PRGRESS ?
        action.payload.isBattleInProgress :
        state;
};
