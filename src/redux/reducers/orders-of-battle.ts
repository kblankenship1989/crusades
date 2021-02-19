import {ActionList} from '../../types/enums';

export const ordersOfBattle = (state: OrderOfBattle[] = [], action: OrdersOfBattleAction) : OrderOfBattle[] => {
    switch (action.type) {
    case ActionList.SET_ORDERS_OF_BATTLE:
        return action.payload.ordersOfBattle;
    default:
        return state;
    }
};
