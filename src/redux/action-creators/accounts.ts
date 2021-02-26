import {AppThunk} from '../store';
import {AvailableActions} from '../action-list';
import {Action} from 'redux';
import {PlayerAccount, getDefaultPlayerAccount} from '../state/player-account';

export type CreateAccountAction = Action<AvailableActions.CREATE_ACCOUNT> & {
    payload: {
        newAccount: PlayerAccount,
        selectedAccountId: string
    }
}

export type UpdateAccountAction = Action<AvailableActions.UPDATE_ACCOUNT> & {
    payload: {
        updates: Partial<PlayerAccount>,
        selectedAccountId: string
    }
}

export type DeleteAccountAction = Action<AvailableActions.DELETE_ACCOUNT> & {
    payload: {
        accountId: string
    }
}

export type SelectAccountAction = Action<AvailableActions.SELECT_ACCOUNT> & {
    payload: {
        lastAccessed: number,
        selectedAccountId: string | null
    }
}

export const createAccount = () : AppThunk => (dispatch) : void => {
    const newAccount = getDefaultPlayerAccount();

    const action : CreateAccountAction = {
        type: AvailableActions.CREATE_ACCOUNT,
        payload: {
            newAccount,
            selectedAccountId: newAccount.accountId
        }
    };

    dispatch(action);
};

export const loadSelectedAccount = (selectedAccountId : string | null) : AppThunk => (dispatch) : void => {
    const action : SelectAccountAction = {
        type: AvailableActions.SELECT_ACCOUNT,
        payload: {
            lastAccessed: new Date().getTime(),
            selectedAccountId
        }
    };

    dispatch(action);
};

export const deleteAccount = (accountId : string) : AppThunk => (dispatch) : void => {
    const action: DeleteAccountAction = {
        type: AvailableActions.DELETE_ACCOUNT,
        payload: {
            accountId
        }
    };

    dispatch(action);
};

export const saveAccount = (selectedAccountId: string, updates : Partial<PlayerAccount>) : AppThunk => (dispatch) : void => {
    const action : UpdateAccountAction = {
        type: AvailableActions.UPDATE_ACCOUNT,
        payload: {
            updates,
            selectedAccountId
        }
    };

    dispatch(action);
};
