import {SelectOrderOfBattleAction} from '../action-creators/orders-of-battle';
import {OrderOfBattleActions} from '../action-list';

export const selectedOrderOfBattleId = (state: string | null = null, action : SelectOrderOfBattleAction) : string | null => {
    return action.type === OrderOfBattleActions.SELECT_ORDER_OF_BATTLE ?
        action.payload.selectedOrderOfBattleId :
        state;
};
