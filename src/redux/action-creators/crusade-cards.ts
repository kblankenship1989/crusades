import {AppThunk} from './../store';
import {Action} from 'redux';
import {CrusadeCardActions} from '../action-list';
import {CrusadeCard, getDefaultCrusadeCard} from '../state/order-of-battle/crusade-card';

export type CreateCrusadeCardAction = Action<CrusadeCardActions.CREATE_CRUSADE_CARD> & {
    payload: {
        newCrusadeCard: CrusadeCard,
        selectedCrusadeCardId: string,
        selectedOrderOfBattleId: string | null,
        selectedAccountId: string | null
    }
}

export type UpdateCrusdaeCArdAction = Action<CrusadeCardActions.UPDATE_CRUSADE_CARD> & {
    payload: {
        updates: Partial<CrusadeCard>,
        selectedCrusadeCardId: string,
        selectedOrderOfBattleId: string | null,
        selectedAccountId: string | null
    }
}

export type DeleteCrusdaeCardAction = Action<CrusadeCardActions.DELETE_CRUSADE_CARD> & {
    payload: {
        crusadeCardId: string,
        selectedOrderOfBattleId: string | null,
        selectedAccountId: string | null
    }
}

export type SelectCrusadeCardAction = Action<CrusadeCardActions.SELECT_CRUSADE_CARD> & {
    payload: {
        selectedCrusadeCardId: string | null,
        selectedOrderOfBattleId: string | null,
        selectedAccountId: string | null
    }
}

export const createCrusadeCard = () : AppThunk => (dispatch, getState) : void => {
    const {
        selectedAccountId,
        selectedOrderOfBattleId
    } = getState();
    const newCrusadeCard = getDefaultCrusadeCard();

    const action : CreateCrusadeCardAction = {
        type: CrusadeCardActions.CREATE_CRUSADE_CARD,
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
        type: CrusadeCardActions.SELECT_CRUSADE_CARD,
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
        type: CrusadeCardActions.DELETE_CRUSADE_CARD,
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
        type: CrusadeCardActions.UPDATE_CRUSADE_CARD,
        payload: {
            updates,
            selectedCrusadeCardId,
            selectedOrderOfBattleId,
            selectedAccountId
        }
    };

    dispatch(action);
};
