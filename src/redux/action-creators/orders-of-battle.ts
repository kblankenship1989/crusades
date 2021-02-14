import {SET_ORDERS_OF_BATTLE} from '../../constants/action-list';
import {defaultOrderOfBattle, OrderOfBattle} from '../../types/state/order-of-battle';
import {AppThunk} from '../thunk';
import {SetOrdersOfBattleAction} from '../actions/orders-of-battle';

export const createOrderOfBattle = () : AppThunk => (dispatch, getState) : void => {
    const newOrderOfBattle = {
        ...defaultOrderOfBattle(),
    };

    const {
        ordersOfBattle
    } = getState();

    const ordersOfBattleAction : SetOrdersOfBattleAction = {
        type: SET_ORDERS_OF_BATTLE,
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
        type: SET_ORDERS_OF_BATTLE,
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
        type: SET_ORDERS_OF_BATTLE,
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
        type: SET_ORDERS_OF_BATTLE,
        payload: {
            ordersOfBattle: newOrdersOfBattle
        }
    };

    dispatch(ordersOfBattleAction);
};
