import {OrderOfBattle} from '../state/order-of-battle';
import {
    SelectOrderOfBattleAction,
    DeleteOrderOfBattleAction,
    CreateOrderOfBattleAction,
    UpdateOrderOfBattleAction
} from '../action-creators/orders-of-battle';
import {OrderOfBattleActions} from '../action-list';

export type OrderOfBattleActionList = SelectOrderOfBattleAction |
    DeleteOrderOfBattleAction |
    CreateOrderOfBattleAction |
    UpdateOrderOfBattleAction

const deleteOrderOfBattle = (ordersOfBattle: Record<string, OrderOfBattle>, action : OrderOfBattleActionList) : Record<string, OrderOfBattle> => {
    const newOrdersOfBattle = {...ordersOfBattle};

    delete newOrdersOfBattle[(action as DeleteOrderOfBattleAction).payload.orderOfBattleId];

    return ordersOfBattle;
};

export const addOrderOfBattle = (ordersOfBattle: Record<string, OrderOfBattle>, action : OrderOfBattleActionList) : Record<string, OrderOfBattle> => {
    const {
        newOrderOfBattle,
        selectedOrderOfBattleId
    } = (action as CreateOrderOfBattleAction).payload;
    return {
        ...ordersOfBattle,
        [selectedOrderOfBattleId]: newOrderOfBattle
    };
};


const updateOrderOfBattle = (ordersOfBattle : Record<string, OrderOfBattle>, action: OrderOfBattleActionList) : Record<string, OrderOfBattle> => {
    const {
        selectedOrderOfBattleId,
        updates
    } = (action as UpdateOrderOfBattleAction).payload;
    const newOrderOfBattle = {
        ...ordersOfBattle[selectedOrderOfBattleId],
        ...updates
    };

    return {
        ...ordersOfBattle,
        [selectedOrderOfBattleId]: newOrderOfBattle
    };
};

const selectOrderOfBattle = (ordersOfBattle : Record<string, OrderOfBattle>, action: OrderOfBattleActionList) : Record<string, OrderOfBattle> => {
    const {
        lastAccessed,
        selectedOrderOfBattleId
    } = (action as SelectOrderOfBattleAction).payload;
    const newOrderOfBattle = {
        ...ordersOfBattle[selectedOrderOfBattleId],
        lastAccessed
    };

    return {
        ...ordersOfBattle,
        [selectedOrderOfBattleId]: newOrderOfBattle
    };
};

export const ordersOfBattleHelper = (ordersOfBattle: Record<string, OrderOfBattle>, action: OrderOfBattleActionList) : Record<string, OrderOfBattle> => {
    const actionMap : Record<OrderOfBattleActions, (ordersOfBattle: Record<string, OrderOfBattle>, action: OrderOfBattleActionList) => Record<string, OrderOfBattle>> = {
        [OrderOfBattleActions.CREATE_ORDER_OF_BATTLE]: addOrderOfBattle,
        [OrderOfBattleActions.DELETE_ORDER_OF_BATTLE]: deleteOrderOfBattle,
        [OrderOfBattleActions.UPDATE_ORDER_OF_BATTLE]: updateOrderOfBattle,
        [OrderOfBattleActions.SELECT_ORDER_OF_BATTLE]: selectOrderOfBattle
    };

    return actionMap[action.type as OrderOfBattleActions] ? actionMap[action.type as OrderOfBattleActions](ordersOfBattle, action) : ordersOfBattle;
};
