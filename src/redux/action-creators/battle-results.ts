import {AppThunk} from '../store';
import {Action} from 'redux';
import {AvailableActions} from '../action-list';
import {BattleResults} from '../state/order-of-battle/battle-results';

export type CreateBattleResultAction = Action<AvailableActions.CREATE_BATTLE_RESULT> & {
    payload: {
        newBattleResult: BattleResults,
        selectedBattleResultId: string,
        selectedOrderOfBattleId: string
    }
}

export type UpdateBattleResultAction = Action<AvailableActions.UPDATE_BATTLE_RESULT> & {
    payload: {
        updates: Partial<BattleResults>,
        selectedBattleResultId: string,
        selectedOrderOfBattleId: string
    }
}

export type DeleteBattleResultAction = Action<AvailableActions.DELETE_BATTLE_RESULT> & {
    payload: {
        battleResultId: string,
        selectedOrderOfBattleId: string
    }
}

export type SelectBattleResultAction = Action<AvailableActions.SELECT_BATTLE_RESULT> & {
    payload: {
        selectedBattleResultId: string | null,
        selectedOrderOfBattleId: string
    }
}

export const createBattleResult = () : AppThunk => (dispatch, getState) : void => {
    const {
        selectedOrderOfBattleId
    } = getState();
    const newBattleResult = new BattleResults();

    const action : CreateBattleResultAction = {
        type: AvailableActions.CREATE_BATTLE_RESULT,
        payload: {
            newBattleResult,
            selectedBattleResultId: newBattleResult.id,
            selectedOrderOfBattleId: selectedOrderOfBattleId as string
        }
    };

    dispatch(action);
};

export const loadSelectedBattleResult = (selectedBattleResultId : string | null) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedOrderOfBattleId
    } = getState();
    const action : SelectBattleResultAction = {
        type: AvailableActions.SELECT_BATTLE_RESULT,
        payload: {
            selectedBattleResultId,
            selectedOrderOfBattleId: selectedOrderOfBattleId as string
        }
    };

    dispatch(action);
};

export const deleteBattleResult = (battleResultId : string) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedOrderOfBattleId
    } = getState();
    const action: DeleteBattleResultAction = {
        type: AvailableActions.DELETE_BATTLE_RESULT,
        payload: {
            battleResultId,
            selectedOrderOfBattleId: selectedOrderOfBattleId as string
        }
    };

    dispatch(action);
};

export const saveBattleResult = (selectedBattleResultId: string, updates : Partial<BattleResults>) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedOrderOfBattleId
    } = getState();
    const action : UpdateBattleResultAction = {
        type: AvailableActions.UPDATE_BATTLE_RESULT,
        payload: {
            updates,
            selectedBattleResultId,
            selectedOrderOfBattleId: selectedOrderOfBattleId as string
        }
    };

    dispatch(action);
};
