import {OrderOfBattle} from "../types/order-of-battle";
import {OrdersOfBattleAction} from "../actions/orders-of-battle";
import {ADD_ORDER_OF_BATTLE} from "../../constants/action-list";

const addOrderOfBattle = (state: OrderOfBattle[] = [], payload: OrderOfBattle) : OrderOfBattle[] => ([
    ...state,
    payload
]);

export const ordersOfBattle = (state: OrderOfBattle[] = [], action: OrdersOfBattleAction) : OrderOfBattle[] => {
    const actionMap = {
        [ADD_ORDER_OF_BATTLE]: addOrderOfBattle
    };

    return action.type in actionMap ? actionMap[action.type](state,action.payload) : state;
};
