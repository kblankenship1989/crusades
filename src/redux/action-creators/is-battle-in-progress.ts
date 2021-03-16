import {Action} from 'redux';
import {AvailableActions} from '../action-list';
import {AppThunk} from '../store';

export type SetBattleInProgressAction = Action<AvailableActions.SET_BATTLE_IN_PRGRESS> & {
    payload: {
        isBattleInProgress: boolean
    }
}

export const setBattleInProgress = (isBattleInProgress: boolean) : AppThunk => (dispatch) : void => {
    const action : SetBattleInProgressAction = {
        type: AvailableActions.SET_BATTLE_IN_PRGRESS,
        payload: {
            isBattleInProgress
        }
    };

    dispatch(action);
};
