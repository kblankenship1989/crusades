import {AppThunk} from './../store';
import {Action} from 'redux';
import {AvailableActions} from '../action-list';
import {CrusadeCard} from '../state/order-of-battle/crusade-card';

export type CreateCrusadeCardAction = Action<AvailableActions.CREATE_CRUSADE_CARD> & {
    payload: {
        newCrusadeCard: CrusadeCard,
        selectedCrusadeCardId: string,
        selectedOrderOfBattleId: string | null,
        selectedAccountId: string | null
    }
}

export type UpdateCrusdaeCArdAction = Action<AvailableActions.UPDATE_CRUSADE_CARD> & {
    payload: {
        updates: Partial<CrusadeCard>,
        selectedCrusadeCardId: string,
        selectedOrderOfBattleId: string | null,
        selectedAccountId: string | null
    }
}

export type DeleteCrusdaeCardAction = Action<AvailableActions.DELETE_CRUSADE_CARD> & {
    payload: {
        crusadeCardId: string,
        selectedOrderOfBattleId: string | null,
        selectedAccountId: string | null
    }
}

export type SelectCrusadeCardAction = Action<AvailableActions.SELECT_CRUSADE_CARD> & {
    payload: {
        selectedCrusadeCardId: string | null,
        selectedOrderOfBattleId: string | null,
        selectedAccountId: string | null
    }
}

export const createCrusadeCard = () : AppThunk => (dispatch, getState) : void => {
    const {
        selectedAccountId,
        selectedOrderOfBattleId,
        accounts
    } = getState();
    const newCrusadeCard = new CrusadeCard(accounts[selectedAccountId as string].player.preferredFaction);

    const action : CreateCrusadeCardAction = {
        type: AvailableActions.CREATE_CRUSADE_CARD,
        payload: {
            newCrusadeCard: newCrusadeCard,
            selectedCrusadeCardId: newCrusadeCard.id,
            selectedOrderOfBattleId,
            selectedAccountId
        }
    };

    dispatch(action);
};

export const loadSelectedCrusadeCard = (selectedCrusadeCardId : string | null) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedAccountId,
        selectedOrderOfBattleId
    } = getState();
    const action : SelectCrusadeCardAction = {
        type: AvailableActions.SELECT_CRUSADE_CARD,
        payload: {
            selectedCrusadeCardId,
            selectedOrderOfBattleId,
            selectedAccountId
        }
    };

    dispatch(action);
};

export const deleteCrusadeCard = (crusadeCardId : string) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedAccountId,
        selectedOrderOfBattleId
    } = getState();
    const action: DeleteCrusdaeCardAction = {
        type: AvailableActions.DELETE_CRUSADE_CARD,
        payload: {
            crusadeCardId,
            selectedOrderOfBattleId,
            selectedAccountId
        }
    };

    dispatch(action);
};

export const saveCrusadeCard = (selectedCrusadeCardId: string, updates : Partial<CrusadeCard>) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedAccountId,
        selectedOrderOfBattleId
    } = getState();
    const action : UpdateCrusdaeCArdAction = {
        type: AvailableActions.UPDATE_CRUSADE_CARD,
        payload: {
            updates,
            selectedCrusadeCardId,
            selectedOrderOfBattleId,
            selectedAccountId
        }
    };

    dispatch(action);
};
