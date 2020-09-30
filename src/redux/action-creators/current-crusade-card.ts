import {CrusadeCard, defaultCrusadeCard} from '../../types/state/crusade-card';
import {AppThunk} from '../thunk';
import {SetCurrentCursadeCardAction} from '../actions/current-crusade-card';
import {SET_CURRENT_CRUSADE_CARD, SET_CURRENT_ORDER_OF_BATTLE, SET_ORDERS_OF_BATTLE} from '../../constants/action-list';
import {SetCurrentOrderOfBattleAction} from '../actions/current-order-of-battle';
import {SetOrdersOfBattleAction} from '../actions/orders-of-battle';

export const saveCurrentCrusadeCard = (updatedCrusadeCard : CrusadeCard) : AppThunk => (dispatch, getState) => {
    const {
        currentCrusadeCard,
        currentOrderOfBattle,
        ordersOfBattle
    } = getState();
    const index = currentCrusadeCard.index;
    const crusadeCards = [...currentOrderOfBattle.crusadeCards];
    crusadeCards[index] = updatedCrusadeCard;

    const newCurrentOrderOfBattle = {
        ...currentOrderOfBattle,
        crusadeCards
    };

    const newOrdersOfBattle = [...ordersOfBattle];
    newOrdersOfBattle[0] = newCurrentOrderOfBattle;

    const currentCrusadeCardAction : SetCurrentCursadeCardAction = {
        type: SET_CURRENT_CRUSADE_CARD,
        payload: {
            currentCrusadeCard: {
                index: currentCrusadeCard.index,
                ...updatedCrusadeCard
            }
        }
    };
    const currentOrderOfBattleAction : SetCurrentOrderOfBattleAction = {
        type: SET_CURRENT_ORDER_OF_BATTLE,
        payload: {
            currentOrderOfBattle: newCurrentOrderOfBattle
        }
    };
    const ordersOfBattleAction : SetOrdersOfBattleAction = {
        type: SET_ORDERS_OF_BATTLE,
        payload: {
            ordersOfBattle: newOrdersOfBattle
        }
    };

    dispatch(currentCrusadeCardAction);
    dispatch(currentOrderOfBattleAction);
    dispatch(ordersOfBattleAction);
};

export const addCrusadeCard = () : AppThunk => (dispatch, getState) => {
    const {
        currentOrderOfBattle,
        ordersOfBattle
    } = getState();
    const index = currentOrderOfBattle.crusadeCards.length;
    const crusadeCards = [
        ...currentOrderOfBattle.crusadeCards,
        defaultCrusadeCard
    ];

    const newCurrentOrderOfBattle = {
        ...currentOrderOfBattle,
        crusadeCards
    };

    const newOrdersOfBattle = [...ordersOfBattle];
    newOrdersOfBattle[0] = newCurrentOrderOfBattle;

    const currentCrusadeCardAction : SetCurrentCursadeCardAction = {
        type: SET_CURRENT_CRUSADE_CARD,
        payload: {
            currentCrusadeCard: {
                index,
                ...defaultCrusadeCard
            }
        }
    };
    const currentOrderOfBattleAction : SetCurrentOrderOfBattleAction = {
        type: SET_CURRENT_ORDER_OF_BATTLE,
        payload: {
            currentOrderOfBattle: newCurrentOrderOfBattle
        }
    };
    const ordersOfBattleAction : SetOrdersOfBattleAction = {
        type: SET_ORDERS_OF_BATTLE,
        payload: {
            ordersOfBattle: newOrdersOfBattle
        }
    };

    dispatch(currentCrusadeCardAction);
    dispatch(currentOrderOfBattleAction);
    dispatch(ordersOfBattleAction);
};

export const deleteCrusadeCard = (indexToDelete : number) : AppThunk => (dispatch, getState) => {
    const {
        currentOrderOfBattle,
        ordersOfBattle
    } = getState();
    const crusadeCards = [
        ...currentOrderOfBattle.crusadeCards
    ];

    crusadeCards.splice(indexToDelete, 1);

    const newCurrentOrderOfBattle = {
        ...currentOrderOfBattle,
        crusadeCards
    };

    const newOrdersOfBattle = [...ordersOfBattle];
    newOrdersOfBattle[0] = newCurrentOrderOfBattle;

    const currentOrderOfBattleAction : SetCurrentOrderOfBattleAction = {
        type: SET_CURRENT_ORDER_OF_BATTLE,
        payload: {
            currentOrderOfBattle: newCurrentOrderOfBattle
        }
    };
    const ordersOfBattleAction : SetOrdersOfBattleAction = {
        type: SET_ORDERS_OF_BATTLE,
        payload: {
            ordersOfBattle: newOrdersOfBattle
        }
    };

    dispatch(currentOrderOfBattleAction);
    dispatch(ordersOfBattleAction);
};

export const loadCurrentCrusadeCard = (selectedIndex : number) : AppThunk => (dispatch, getState) => {
    const {
        currentOrderOfBattle : {crusadeCards}
    } = getState();

    const action : SetCurrentCursadeCardAction = {
        type: SET_CURRENT_CRUSADE_CARD,
        payload: {
            currentCrusadeCard: {
                index: selectedIndex,
                ...[...crusadeCards][selectedIndex]
            }
        }
    };

    dispatch(action);
};
