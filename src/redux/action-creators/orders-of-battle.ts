import {ActionList} from '../../types/enums';
import {defaultOrderOfBattle} from '../state/order-of-battle';

export const createOrderOfBattle = () : AppThunk => (dispatch, getState) : void => {
    const newOrderOfBattle = {
        ...defaultOrderOfBattle(),
    };

    const {
        ordersOfBattle
    } = getState();

    const ordersOfBattleAction : SetOrdersOfBattleAction = {
        type: ActionList.SET_ORDERS_OF_BATTLE,
        payload: {
            ordersOfBattle: [
                newOrderOfBattle,
                ...ordersOfBattle
            ]
        }
    };

    dispatch(ordersOfBattleAction);
};

export const loadSelectedOrderOfBattle = (selectedIndex : number) : AppThunk => (dispatch, getState) : void => {
    const {
        ordersOfBattle
    } = getState();

    const newOrdersOfBattle = [...ordersOfBattle];
    const currentOrderOfBattle = newOrdersOfBattle.splice(selectedIndex, 1);

    const ordersOfBattleAction : SetOrdersOfBattleAction = {
        type: ActionList.SET_ORDERS_OF_BATTLE,
        payload: {
            ordersOfBattle: [
                ...currentOrderOfBattle,
                ...newOrdersOfBattle
            ]
        }
    };

    dispatch(ordersOfBattleAction);
};

export const deleteSelectedOrderOfBattle = (selectedIndex : number) : AppThunk => (dispatch, getState) : void => {
    const {
        ordersOfBattle
    } = getState();

    const newOrdersOfBattle = [...ordersOfBattle];
    newOrdersOfBattle.splice(selectedIndex, 1);

    const action: SetOrdersOfBattleAction = {
        type: ActionList.SET_ORDERS_OF_BATTLE,
        payload: {
            ordersOfBattle: [
                ...newOrdersOfBattle
            ]
        }
    };

    dispatch(action);
};

export const saveCurrentOrderOfBattle = (updates : Partial<OrderOfBattle>) : AppThunk => (dispatch, getState) : void => {
    const {
        ordersOfBattle
    } = getState();

    const newOrdersOfBattle = [...ordersOfBattle];

    newOrdersOfBattle[0] = {
        ...ordersOfBattle[0],
        ...updates
    };

    const ordersOfBattleAction : SetOrdersOfBattleAction = {
        type: ActionList.SET_ORDERS_OF_BATTLE,
        payload: {
            ordersOfBattle: newOrdersOfBattle
        }
    };

    dispatch(ordersOfBattleAction);
};
