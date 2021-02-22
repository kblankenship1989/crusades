import {OrderOfBattleActions} from './../action-list';
import {getDefaultOrderOfBattle, OrderOfBattle} from '../state/order-of-battle';

export type CreateOrderOfBattleAction = {
    type: OrderOfBattleActions.CREATE_ORDER_OF_BATTLE,
    payload: {
        newOrderOfBattle: OrderOfBattle,
        selectedOrderOfBattleId: string
        selectedAccountId: string
    }
}

export type UpdateOrderOfBattleAction = {
    type: OrderOfBattleActions.UPDATE_ORDER_OF_BATTLE,
    payload: {
        updates: Partial<OrderOfBattle>,
        selectedOrderOfBattleId: string,
        selectedAccountId: string
    }
}

export type DeleteOrderOfBattleAction = {
    type: OrderOfBattleActions.DELETE_ORDER_OF_BATTLE,
    payload: {
        orderOfBattleId: string,
        selectedAccountId: string
    }
}

export type SelectOrderOfBattleAction = {
    type: OrderOfBattleActions.SELECT_ORDER_OF_BATTLE,
    payload: {
        selectedOrderOfBattleId: string,
        lastAccessed: Date,
        selectedAccountId: string
    }
}

export const createOrderOfBattle = () : AppThunk => (dispatch, getState) : void => {
    const {
        selectedAccountId
    } = getState();
    const newOrderOfBattle = getDefaultOrderOfBattle();

    const createOrderOfBattle : CreateOrderOfBattleAction = {
        type: OrderOfBattleActions.CREATE_ORDER_OF_BATTLE,
        payload: {
            newOrderOfBattle: newOrderOfBattle,
            selectedOrderOfBattleId: newOrderOfBattle.id,
            selectedAccountId
        }
    };

    dispatch(createOrderOfBattle);
};

export const loadSelectedOrderOfBattle = (selectedOrderOfBattleId : string) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedAccountId
    } = getState();
    const selectOrderOfBattle : SelectOrderOfBattleAction = {
        type: OrderOfBattleActions.SELECT_ORDER_OF_BATTLE,
        payload: {
            selectedOrderOfBattleId,
            lastAccessed: new Date(),
            selectedAccountId
        }
    };

    dispatch(selectOrderOfBattle);
};

export const deleteOrderOfBattle = (orderOfBattleId : string) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedAccountId
    } = getState();
    const action: DeleteOrderOfBattleAction = {
        type: OrderOfBattleActions.DELETE_ORDER_OF_BATTLE,
        payload: {
            orderOfBattleId,
            selectedAccountId
        }
    };

    dispatch(action);
};

export const saveOrderOfBattle = (selectedOrderOfBattleId: string, updates : Partial<OrderOfBattle>) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedAccountId
    } = getState();
    const ordersOfBattleAction : UpdateOrderOfBattleAction = {
        type: OrderOfBattleActions.UPDATE_ORDER_OF_BATTLE,
        payload: {
            updates,
            selectedOrderOfBattleId,
            selectedAccountId
        }
    };

    dispatch(ordersOfBattleAction);
};
