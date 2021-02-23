import {OrderOfBattleActionList, ordersOfBattleHelper} from './order-of-battle-helpers';
import {PlayerAccount} from '../state/player-account';
import {defaultState} from '../state';
import {OrderOfBattleActions, AvailableActions, CrusadeCardActions} from '../action-list';

type AccountsActionList = OrderOfBattleActionList

type AccountReducer = (state: Record<string, PlayerAccount>, action: AccountsActionList) => Record<string, PlayerAccount>

const updateOrdersOfBattle : AccountReducer = (state, action) => {
    const selectedAccountId = (action as OrderOfBattleActionList).payload.selectedAccountId;
    if (selectedAccountId === null) {
        return state;
    }
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
    const actionsMap : Record<OrderOfBattleActions | CrusadeCardActions, (state: Record<string, PlayerAccount>, action : AccountsActionList) => Record<string, PlayerAccount>> = {
        [AvailableActions.CREATE_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [AvailableActions.UPDATE_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [AvailableActions.DELETE_ORDER_OF_BATTLE]: updateOrdersOfBattle,
        [AvailableActions.SELECT_ORDER_OF_BATTLE]: updateOrdersOfBattle
    };

    return actionsMap[action.type] ? actionsMap[action.type](state, action) : state;
};
