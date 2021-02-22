import {OrderOfBattleActionList, ordersOfBattleHelper} from './order-of-battle-helpers';
import {PlayerAccount} from '../state/player-account';
import {defaultState} from '../state';
import {OrderOfBattleActions} from '../action-list';

type AccountsActionList = OrderOfBattleActionList

const updateOrdersOfBattle = (state: Record<string, PlayerAccount>, action : AccountsActionList) : Record<string, PlayerAccount> => {
    const selectedAccountId = (action as OrderOfBattleActionList).payload.selectedAccountId;
    const newAccount : PlayerAccount = {
        ...state[selectedAccountId],
        ordersOfBattle: ordersOfBattleHelper(state[selectedAccountId].ordersOfBattle, action as OrderOfBattleActionList)
    };

    return {
        ...state,
        [selectedAccountId]: newAccount
    };
};

export const accounts = (state: Record<string, PlayerAccount> = defaultState.accounts, action : AccountsActionList) : Record<string, PlayerAccount> => {
    const actionsMap : Record<OrderOfBattleActions, (state: Record<string, PlayerAccount>, action : AccountsActionList) => Record<string, PlayerAccount>> = {
        [OrderOfBattleActions.CREATE_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [OrderOfBattleActions.UPDATE_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [OrderOfBattleActions.DELETE_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [OrderOfBattleActions.SELECT_ORDER_OF_BATTLE]: updateOrdersOfBattle
    };

    return actionsMap[action.type] ? actionsMap[action.type](state, action) : state;
};
