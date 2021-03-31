import {OrderOfBattleActionList, ordersOfBattleHelper} from './order-of-battle-helpers';
import {PlayerAccount} from '../state/player-account';
import {OrderOfBattleActions, AvailableActions, CrusadeCardActions, AccountActions, BattleResultActions} from '../action-list';
import {CrusadeCardActionList} from './crusade-card-helpers';
import {UpdateAccountAction} from '../action-creators/accounts';
import {AnyAction} from 'redux';
import {State} from '../state';
import {BattleResultActionList} from './battle-result-helpers';

type AccountsActions = OrderOfBattleActions | CrusadeCardActions | AccountActions | BattleResultActions

export type AccountsActionList =
    UpdateAccountAction |
    OrderOfBattleActionList |
    CrusadeCardActionList |
    BattleResultActionList |
    AnyAction

type AccountReducer = (state: PlayerAccount, action: AccountsActionList) => PlayerAccount

const updateAccount : AccountReducer = (state, action) => {
    const {
        updates
    } = (action as UpdateAccountAction).payload;
    const newAccount = {
        ...state,
        ...updates
    };

    return newAccount;
};

const updateOrdersOfBattle : AccountReducer = (state, action) => {
    const newAccount = {...state};

    newAccount.ordersOfBattle = ordersOfBattleHelper(state.ordersOfBattle, action as OrderOfBattleActionList);

    return newAccount;
};

export const account = (state : PlayerAccount = new State().account, action : AccountsActionList) : PlayerAccount => {
    const actionsMap : Record<AccountsActions, AccountReducer> = {
        [AvailableActions.UPDATE_ACCOUNT]: updateAccount,
        [AvailableActions.CREATE_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [AvailableActions.UPDATE_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [AvailableActions.DELETE_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [AvailableActions.SELECT_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [AvailableActions.CREATE_CRUSADE_CARD]: updateOrdersOfBattle,
        [AvailableActions.UPDATE_CRUSADE_CARD]: updateOrdersOfBattle,
        [AvailableActions.DELETE_CRUSADE_CARD]: updateOrdersOfBattle,
        [AvailableActions.SELECT_CRUSADE_CARD]: updateOrdersOfBattle,
        [AvailableActions.CREATE_BATTLE_RESULT]: updateOrdersOfBattle,
        [AvailableActions.UPDATE_BATTLE_RESULT]: updateOrdersOfBattle,
        [AvailableActions.DELETE_BATTLE_RESULT]: updateOrdersOfBattle,
        [AvailableActions.SELECT_BATTLE_RESULT]: updateOrdersOfBattle
    };

    return action.type in actionsMap ?
        actionsMap[action.type as AccountActions](state, action) :
        state;
};
