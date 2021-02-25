import {OrderOfBattle} from '../state/order-of-battle';
import {
    SelectOrderOfBattleAction,
    DeleteOrderOfBattleAction,
    CreateOrderOfBattleAction,
    UpdateOrderOfBattleAction
} from '../action-creators/orders-of-battle';
import {AvailableActions, CrusadeCardActions, OrderOfBattleActions} from '../action-list';
import {CrusadeCardActionList, crusadeCardHelpers} from './crusade-card-helpers';

export type OrderOfBattleActionList = SelectOrderOfBattleAction |
    DeleteOrderOfBattleAction |
    CreateOrderOfBattleAction |
    UpdateOrderOfBattleAction |
    CrusadeCardActionList

type OrderOfBattleHelper = (ordersOfBattle: Record<string, OrderOfBattle>, action: OrderOfBattleActionList) => Record<string, OrderOfBattle>

const deleteOrderOfBattle : OrderOfBattleHelper = (ordersOfBattle, action) => {
    const newOrdersOfBattle = {...ordersOfBattle};

    delete newOrdersOfBattle[(action as DeleteOrderOfBattleAction).payload.orderOfBattleId];

    return newOrdersOfBattle;
};

const addOrderOfBattle : OrderOfBattleHelper = (ordersOfBattle, action) => {
    const {
        newOrderOfBattle,
        selectedOrderOfBattleId
    } = (action as CreateOrderOfBattleAction).payload;
    return {
        ...ordersOfBattle,
        [selectedOrderOfBattleId]: newOrderOfBattle
    };
};


const updateOrderOfBattle : OrderOfBattleHelper = (ordersOfBattle, action) => {
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

const selectOrderOfBattle : OrderOfBattleHelper = (ordersOfBattle, action) => {
    const {
        lastAccessed,
        selectedOrderOfBattleId
    } = (action as SelectOrderOfBattleAction).payload;

    if (selectedOrderOfBattleId === null) {
        return ordersOfBattle;
    }

    const newOrderOfBattle = {
        ...ordersOfBattle[selectedOrderOfBattleId],
        lastAccessed
    };

    return {
        ...ordersOfBattle,
        [selectedOrderOfBattleId]: newOrderOfBattle
    };
};

const updateCrusadeCards : OrderOfBattleHelper = (ordersOfBattle, action) => {
    const selectedOrderOfBattleId = (action as CrusadeCardActionList).payload.selectedOrderOfBattleId;
    if (selectedOrderOfBattleId === null) {
        return ordersOfBattle;
    }
    const newOrderOfBattle : OrderOfBattle = {
        ...ordersOfBattle[selectedOrderOfBattleId],
        crusadeCards: crusadeCardHelpers(ordersOfBattle[selectedOrderOfBattleId].crusadeCards, action as CrusadeCardActionList)
    };

    return {
        ...ordersOfBattle,
        [selectedOrderOfBattleId]: newOrderOfBattle
    };
};

export const ordersOfBattleHelper : OrderOfBattleHelper = (ordersOfBattle, action) => {
    const actionMap : Record<OrderOfBattleActions | CrusadeCardActions, OrderOfBattleHelper> = {
        [AvailableActions.CREATE_ORDER_OF_BATTLE]: addOrderOfBattle,
        [AvailableActions.DELETE_ORDER_OF_BATTLE]: deleteOrderOfBattle,
        [AvailableActions.UPDATE_ORDER_OF_BATTLE]: updateOrderOfBattle,
        [AvailableActions.SELECT_ORDER_OF_BATTLE]: selectOrderOfBattle,
        [AvailableActions.CREATE_CRUSADE_CARD]: updateCrusadeCards,
        [AvailableActions.DELETE_CRUSADE_CARD]: updateCrusadeCards,
        [AvailableActions.UPDATE_CRUSADE_CARD]: updateCrusadeCards,
        [AvailableActions.SELECT_CRUSADE_CARD]: updateCrusadeCards
    };

    return actionMap[action.type as OrderOfBattleActions] ?
        actionMap[action.type as OrderOfBattleActions](ordersOfBattle, action) :
        ordersOfBattle;
};
