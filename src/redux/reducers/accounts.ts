import {OrderOfBattleActionList, ordersOfBattleHelper} from './order-of-battle-helpers';
import {PlayerAccount} from '../state/player-account';
import {OrderOfBattleActions, AvailableActions, CrusadeCardActions, AccountActions} from '../action-list';
import {CrusadeCardActionList} from './crusade-card-helpers';
import {CreateAccountAction, UpdateAccountAction, DeleteAccountAction, SelectAccountAction} from '../action-creators/accounts';
import {AnyAction} from 'redux';
import {State} from '../state';

type AccountsActions = OrderOfBattleActions | CrusadeCardActions | AccountActions

export type AccountsActionList =
    CreateAccountAction |
    UpdateAccountAction |
    DeleteAccountAction |
    SelectAccountAction |
    OrderOfBattleActionList |
    CrusadeCardActionList | AnyAction

type AccountReducer = (state: Record<string, PlayerAccount>, action: AccountsActionList) => Record<string, PlayerAccount>

const deleteAccount : AccountReducer = (state, action) => {
    const newAccounts = {...state};

    delete newAccounts[(action as DeleteAccountAction).payload.accountId];

    return newAccounts;
};

const addAccount : AccountReducer = (state, action) => {
    const {
        newAccount,
        selectedAccountId
    } = (action as CreateAccountAction).payload;
    return {
        ...state,
        [selectedAccountId]: newAccount
    };
};


const updateAccount : AccountReducer = (state, action) => {
    const {
        selectedAccountId,
        updates
    } = (action as UpdateAccountAction).payload;
    const newAccount = {
        ...state[selectedAccountId],
        ...updates
    };

    return {
        ...state,
        [selectedAccountId]: newAccount
    };
};

const selectAccount : AccountReducer = (state, action) => {
    const {
        lastAccessed,
        selectedAccountId
    } = (action as SelectAccountAction).payload;

    if (selectedAccountId === null) {
        return state;
    }

    const newAccount = {
        ...state[selectedAccountId],
        lastAccessed
    };

    return {
        ...state,
        [selectedAccountId]: newAccount
    };
};

const updateOrdersOfBattle : AccountReducer = (state, action) => {
    const selectedAccountId = (action as OrderOfBattleActionList).payload.selectedAccountId;
    if (selectedAccountId === null) {
        return state;
    }
    const newAccount = state[selectedAccountId];

    newAccount.ordersOfBattle = ordersOfBattleHelper(state[selectedAccountId].ordersOfBattle, action as OrderOfBattleActionList);

    return {
        ...state,
        [selectedAccountId]: newAccount
    };
};

export const accounts = (state : Record<string, PlayerAccount> = new State().accounts, action : AccountsActionList) : Record<string, PlayerAccount> => {
    const actionsMap : Record<AccountsActions, AccountReducer> = {
        [AvailableActions.CREATE_ACCOUNT]: addAccount,
        [AvailableActions.DELETE_ACCOUNT]: deleteAccount,
        [AvailableActions.UPDATE_ACCOUNT]: updateAccount,
        [AvailableActions.SELECT_ACCOUNT]: selectAccount,
        [AvailableActions.CREATE_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [AvailableActions.UPDATE_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [AvailableActions.DELETE_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [AvailableActions.SELECT_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [AvailableActions.CREATE_CRUSADE_CARD]: updateOrdersOfBattle,
        [AvailableActions.UPDATE_CRUSADE_CARD]: updateOrdersOfBattle,
        [AvailableActions.DELETE_CRUSADE_CARD]: updateOrdersOfBattle,
        [AvailableActions.SELECT_CRUSADE_CARD]: updateOrdersOfBattle
    };

    return action.type in actionsMap ?
        actionsMap[action.type as AccountActions](state, action) :
        state;
};
