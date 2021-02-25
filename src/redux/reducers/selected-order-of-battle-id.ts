import {SelectOrderOfBattleAction, CreateOrderOfBattleAction} from '../action-creators/orders-of-battle';
import {AvailableActions} from '../action-list';
import {AnyAction} from 'redux';

type SelectedOrderOfBattleIdActions = SelectOrderOfBattleAction | CreateOrderOfBattleAction | AnyAction

export const selectedOrderOfBattleId = (state: string | null = null, action : SelectedOrderOfBattleIdActions) : string | null => {
    return action.type === AvailableActions.SELECT_ORDER_OF_BATTLE
        || action.type === AvailableActions.CREATE_ORDER_OF_BATTLE ?
        action.payload.selectedOrderOfBattleId :
        state;
};
