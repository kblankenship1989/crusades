import {AppThunk} from './../store';
import {AvailableActions} from './../action-list';
import {getDefaultOrderOfBattle, OrderOfBattle} from '../state/order-of-battle';
import {Action} from 'redux';

export type CreateOrderOfBattleAction = Action<AvailableActions.CREATE_ORDER_OF_BATTLE> & {
    payload: {
        newOrderOfBattle: OrderOfBattle,
        selectedOrderOfBattleId: string,
        selectedAccountId: string | null
    }
}

export type UpdateOrderOfBattleAction = Action<AvailableActions.UPDATE_ORDER_OF_BATTLE> & {
    payload: {
        updates: Partial<OrderOfBattle>,
        selectedOrderOfBattleId: string,
        selectedAccountId: string | null
    }
}

export type DeleteOrderOfBattleAction = Action<AvailableActions.DELETE_ORDER_OF_BATTLE> & {
    payload: {
        orderOfBattleId: string,
        selectedAccountId: string | null
    }
}

export type SelectOrderOfBattleAction = Action<AvailableActions.SELECT_ORDER_OF_BATTLE> & {
    payload: {
        selectedOrderOfBattleId: string | null,
        lastAccessed: number,
        selectedAccountId: string | null
    }
}

export const createOrderOfBattle = () : AppThunk => (dispatch, getState) : void => {
    const {
        selectedAccountId
    } = getState();
    const newOrderOfBattle = getDefaultOrderOfBattle();

    const action : CreateOrderOfBattleAction = {
        type: AvailableActions.CREATE_ORDER_OF_BATTLE,
        payload: {
            newOrderOfBattle: newOrderOfBattle,
            selectedOrderOfBattleId: newOrderOfBattle.id,
            selectedAccountId
        }
    };

    dispatch(action);
};

export const loadSelectedOrderOfBattle = (selectedOrderOfBattleId : string | null) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedAccountId
    } = getState();
    const action : SelectOrderOfBattleAction = {
        type: AvailableActions.SELECT_ORDER_OF_BATTLE,
        payload: {
            selectedOrderOfBattleId,
            lastAccessed: new Date().getTime(),
            selectedAccountId
        }
    };

    dispatch(action);
};

export const deleteOrderOfBattle = (orderOfBattleId : string) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedAccountId
    } = getState();
    const action: DeleteOrderOfBattleAction = {
        type: AvailableActions.DELETE_ORDER_OF_BATTLE,
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
    const action : UpdateOrderOfBattleAction = {
        type: AvailableActions.UPDATE_ORDER_OF_BATTLE,
        payload: {
            updates,
            selectedOrderOfBattleId,
            selectedAccountId
        }
    };

    dispatch(action);
};
