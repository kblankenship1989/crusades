import {AppThunk} from './../store';
import {Action} from 'redux';
import {AvailableActions} from '../action-list';
import {CrusadeCard} from '../state/order-of-battle/crusade-card';

export type CreateCrusadeCardAction = Action<AvailableActions.CREATE_CRUSADE_CARD> & {
    payload: {
        newCrusadeCard: CrusadeCard,
        selectedCrusadeCardId: string,
        selectedOrderOfBattleId: string
    }
}

export type UpdateCrusadeCardAction = Action<AvailableActions.UPDATE_CRUSADE_CARD> & {
    payload: {
        updates: Partial<CrusadeCard>,
        selectedCrusadeCardId: string,
        selectedOrderOfBattleId: string
    }
}

export type DeleteCrusadeCardAction = Action<AvailableActions.DELETE_CRUSADE_CARD> & {
    payload: {
        crusadeCardId: string,
        selectedOrderOfBattleId: string
    }
}

export type SelectCrusadeCardAction = Action<AvailableActions.SELECT_CRUSADE_CARD> & {
    payload: {
        selectedCrusadeCardId: string | null,
        selectedOrderOfBattleId: string
    }
}

export const createCrusadeCard = () : AppThunk => (dispatch, getState) : void => {
    const {
        selectedOrderOfBattleId,
        account
    } = getState();
    const newCrusadeCard = new CrusadeCard(account.player.preferredFaction);

    const action : CreateCrusadeCardAction = {
        type: AvailableActions.CREATE_CRUSADE_CARD,
        payload: {
            newCrusadeCard: newCrusadeCard,
            selectedCrusadeCardId: newCrusadeCard.id,
            selectedOrderOfBattleId: selectedOrderOfBattleId as string
        }
    };

    dispatch(action);
};

export const loadSelectedCrusadeCard = (selectedCrusadeCardId : string | null) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedOrderOfBattleId
    } = getState();
    const action : SelectCrusadeCardAction = {
        type: AvailableActions.SELECT_CRUSADE_CARD,
        payload: {
            selectedCrusadeCardId,
            selectedOrderOfBattleId: selectedOrderOfBattleId as string
        }
    };

    dispatch(action);
};

export const deleteCrusadeCard = (crusadeCardId : string) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedOrderOfBattleId
    } = getState();
    const action: DeleteCrusadeCardAction = {
        type: AvailableActions.DELETE_CRUSADE_CARD,
        payload: {
            crusadeCardId,
            selectedOrderOfBattleId: selectedOrderOfBattleId as string
        }
    };

    dispatch(action);
};

export const saveCrusadeCard = (selectedCrusadeCardId: string, updates : Partial<CrusadeCard>) : AppThunk => (dispatch, getState) : void => {
    const {
        selectedOrderOfBattleId
    } = getState();
    const action : UpdateCrusadeCardAction = {
        type: AvailableActions.UPDATE_CRUSADE_CARD,
        payload: {
            updates,
            selectedCrusadeCardId,
            selectedOrderOfBattleId: selectedOrderOfBattleId as string
        }
    };

    dispatch(action);
};
