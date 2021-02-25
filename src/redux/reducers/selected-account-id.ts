import {SelectAccountAction, CreateAccountAction} from '../action-creators/accounts';
import {AvailableActions} from '../action-list';
import {AnyAction} from 'redux';

type SelectedAccountIdActions = SelectAccountAction | CreateAccountAction | AnyAction

export const selectedAccountId = (state: string | null = null, action : SelectedAccountIdActions) : string | null => {
    return action.type === AvailableActions.CREATE_ACCOUNT ||
        action.type === AvailableActions.SELECT_ACCOUNT ?
        action.payload.selectedAccountId :
        state;
};
