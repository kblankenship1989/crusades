import {Factions} from '../../types/consts';
import {SET_CURRENT_ORDER_OF_BATTLE, SET_ORDERS_OF_BATTLE} from '../../constants/action-list';
import {defaultOrderOfBattle, OrderOfBattle} from '../../types/state/order-of-battle';
import {AppThunk} from '../thunk';
import {SetCurrentOrderOfBattleAction} from '../actions/current-order-of-battle';
import {SetOrdersOfBattleAction} from '../actions/orders-of-battle';

export const createOrderOfBattle = (title: string, faction : Factions) : AppThunk => (dispatch, getState) : void => {
    const newOrderOfBattle = {
        ...defaultOrderOfBattle,
        title,
        faction
    };

    const {
        ordersOfBattle
    } = getState();

    const currentOrderOfBattleAction : SetCurrentOrderOfBattleAction = {
        type: SET_CURRENT_ORDER_OF_BATTLE,
        payload: {
            currentOrderOfBattle: newOrderOfBattle
        }
    };
    const ordersOfBattleAction : SetOrdersOfBattleAction = {
        type: SET_ORDERS_OF_BATTLE,
        payload: {
            ordersOfBattle: [
                newOrderOfBattle,
                ...ordersOfBattle
            ]
        }
    };

    dispatch(currentOrderOfBattleAction);
    dispatch(ordersOfBattleAction);
};

export const loadSelectedOrderOfBattle = (selectedIndex : number) : AppThunk => (dispatch, getState) : void => {
    const {
        ordersOfBattle
    } = getState();

    const newOrdersOfBattle = [...ordersOfBattle];
    const currentOrderOfBattle = newOrdersOfBattle.splice(selectedIndex, 1);

    const currentOrderOfBattleAction: SetCurrentOrderOfBattleAction = {
        type: SET_CURRENT_ORDER_OF_BATTLE,
        payload: {
            currentOrderOfBattle: currentOrderOfBattle[0],
        }
    };

    const ordersOfBattleAction : SetOrdersOfBattleAction = {
        type: SET_ORDERS_OF_BATTLE,
        payload: {
            ordersOfBattle: [
                ...currentOrderOfBattle,
                ...newOrdersOfBattle
            ]
        }
    };

    dispatch(currentOrderOfBattleAction);
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

export const saveCurrentOrderOfBattle = (currentOrderOfBattle : OrderOfBattle) : AppThunk => (dispatch, getState) : void => {
    const {
        ordersOfBattle
    } = getState();

    const newOrdersOfBattle = [...ordersOfBattle];
    newOrdersOfBattle.shift();

    const currentOrderOfBattleAction: SetCurrentOrderOfBattleAction = {
        type: SET_CURRENT_ORDER_OF_BATTLE,
        payload: {
            currentOrderOfBattle,
        }
    };

    const ordersOfBattleAction : SetOrdersOfBattleAction = {
        type: SET_ORDERS_OF_BATTLE,
        payload: {
            ordersOfBattle: [
                currentOrderOfBattle,
                ...newOrdersOfBattle
            ]
        }
    };

    dispatch(currentOrderOfBattleAction);
    dispatch(ordersOfBattleAction);
};
