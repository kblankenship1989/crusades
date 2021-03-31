import {AppThunk} from './../store';
import {AvailableActions} from './../action-list';
import {OrderOfBattle} from '../state/order-of-battle';
import {Action} from 'redux';

export type CreateOrderOfBattleAction = Action<AvailableActions.CREATE_ORDER_OF_BATTLE> & {
    payload: {
        newOrderOfBattle: OrderOfBattle,
        selectedOrderOfBattleId: string
    }
}

export type UpdateOrderOfBattleAction = Action<AvailableActions.UPDATE_ORDER_OF_BATTLE> & {
    payload: {
        updates: Partial<OrderOfBattle>,
        selectedOrderOfBattleId: string
    }
}

export type DeleteOrderOfBattleAction = Action<AvailableActions.DELETE_ORDER_OF_BATTLE> & {
    payload: {
        orderOfBattleId: string
    }
}

export type SelectOrderOfBattleAction = Action<AvailableActions.SELECT_ORDER_OF_BATTLE> & {
    payload: {
        selectedOrderOfBattleId: string | null,
        lastAccessed: number
    }
}

export const createOrderOfBattle = () : AppThunk => (dispatch, getState) : void => {
    const {
        account
    } = getState();
    const newOrderOfBattle = new OrderOfBattle(account.player.preferredFaction);

    const action : CreateOrderOfBattleAction = {
        type: AvailableActions.CREATE_ORDER_OF_BATTLE,
        payload: {
            newOrderOfBattle: newOrderOfBattle,
            selectedOrderOfBattleId: newOrderOfBattle.id
        }
    };

    dispatch(action);
};

export const loadSelectedOrderOfBattle = (selectedOrderOfBattleId : string | null) : AppThunk => (dispatch) : void => {
    const action : SelectOrderOfBattleAction = {
        type: AvailableActions.SELECT_ORDER_OF_BATTLE,
        payload: {
            selectedOrderOfBattleId,
            lastAccessed: new Date().getTime()
        }
    };

    dispatch(action);
};

export const deleteOrderOfBattle = (orderOfBattleId : string) : AppThunk => (dispatch) : void => {
    const action: DeleteOrderOfBattleAction = {
        type: AvailableActions.DELETE_ORDER_OF_BATTLE,
        payload: {
            orderOfBattleId
        }
    };

    dispatch(action);
};

export const saveOrderOfBattle = (selectedOrderOfBattleId: string, updates : Partial<OrderOfBattle>) : AppThunk => (dispatch) : void => {
    const action : UpdateOrderOfBattleAction = {
        type: AvailableActions.UPDATE_ORDER_OF_BATTLE,
        payload: {
            updates,
            selectedOrderOfBattleId
        }
    };

    dispatch(action);
};
