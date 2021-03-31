import {AppThunk} from '../store';
import {AvailableActions} from '../action-list';
import {Action} from 'redux';
import {PlayerAccount} from '../state/player-account';

export type UpdateAccountAction = Action<AvailableActions.UPDATE_ACCOUNT> & {
    payload: {
        updates: Partial<PlayerAccount>
    }
}

export const saveAccount = (updates : Partial<PlayerAccount>) : AppThunk => (dispatch) : void => {
    const action : UpdateAccountAction = {
        type: AvailableActions.UPDATE_ACCOUNT,
        payload: {
            updates
        }
    };

    dispatch(action);
};
