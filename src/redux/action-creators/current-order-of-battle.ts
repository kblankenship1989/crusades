import {Factions} from '../../types/consts';
import {ADD_ORDER_OF_BATTLE, DELETE_ORDER_OF_BATTLE, LOAD_CURRENT_ORDER_OF_BATTLE, SAVE_CURRENT_ORDER_OF_BATTLE} from '../../constants/action-list';
import {defaultOrderOfBattle, OrderOfBattle} from '../types/order-of-battle';
import {AppThunk} from '../thunk';
import {AddOrderOfBattle, LoadCurrentOrderOfBattle, DeleteOrderOfBattle, SaveCurrentOrderOfBattle} from '../actions/orders-of-battle';

export const createOrderOfBattle = (title: string, faction : Factions) : AppThunk => (dispatch) : void => {
    const action : AddOrderOfBattle = {
        type: ADD_ORDER_OF_BATTLE,
        payload: {
            currentOrderOfBattle: {
                ...defaultOrderOfBattle,
                title,
                faction
            }
        }
    };

    dispatch(action);
};

export const loadSelectedOrderOfBattle = (selectedIndex : number) : AppThunk => (dispatch, getState) : void => {
    const {
        ordersOfBattle
    } = getState();

    const newOrdersOfBattle = [...ordersOfBattle];
    const currentOrderOfBattle = newOrdersOfBattle.splice(selectedIndex, 1);

    const action: LoadCurrentOrderOfBattle = {
        type: LOAD_CURRENT_ORDER_OF_BATTLE,
        payload: {
            currentOrderOfBattle: currentOrderOfBattle[0],
            ordersOfBattle: [
                ...currentOrderOfBattle,
                ...newOrdersOfBattle
            ]
        }
    };

    dispatch(action);
};

export const deleteSelectedOrderOfBattle = (selectedIndex : number) : AppThunk => (dispatch, getState) : void => {
    const {
        ordersOfBattle
    } = getState();

    const newOrdersOfBattle = [...ordersOfBattle];
    newOrdersOfBattle.splice(selectedIndex, 1);

    const action: DeleteOrderOfBattle = {
        type: DELETE_ORDER_OF_BATTLE,
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
    const updatedOrdersOfBattle = [...ordersOfBattle];
    updatedOrdersOfBattle.shift();
    const action : SaveCurrentOrderOfBattle = {
        type: SAVE_CURRENT_ORDER_OF_BATTLE,
        payload: {
            currentOrderOfBattle,
            ordersOfBattle: [
                currentOrderOfBattle,
                ...updatedOrdersOfBattle
            ]
        }
    };

    dispatch(action);
};
