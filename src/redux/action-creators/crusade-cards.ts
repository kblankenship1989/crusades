import {ActionList} from '../../types/enums';
import {defaultCrusadeCard} from '../state/crusade-card';

export const saveCurrentCrusadeCard = (updates : Partial<CrusadeCard>) : AppThunk => (dispatch, getState) => {
    const {
        ordersOfBattle,
        currentCrusadeCardIndex
    } = getState();

    const newOrdersOfBattle = [...ordersOfBattle];
    const crusadeCards = ordersOfBattle[0].crusadeCards;
    crusadeCards[currentCrusadeCardIndex] = {
        ...crusadeCards[currentCrusadeCardIndex],
        ...updates
    };

    const ordersOfBattleAction : SetOrdersOfBattleAction = {
        type: ActionList.SET_ORDERS_OF_BATTLE,
        payload: {
            ordersOfBattle: newOrdersOfBattle
        }
    };

    dispatch(ordersOfBattleAction);
};

// export const addCrusadeCard = () : AppThunk => (dispatch, getState) => {
//     const {
//         currentOrderOfBattle,
//         ordersOfBattle
//     } = getState();
//     const index = currentOrderOfBattle.crusadeCards.length;
//     const crusadeCards = [
//         ...currentOrderOfBattle.crusadeCards,
//         defaultCrusadeCard
//     ];

//     const newCurrentOrderOfBattle = {
//         ...currentOrderOfBattle,
//         crusadeCards
//     };

//     const newOrdersOfBattle = [...ordersOfBattle];
//     newOrdersOfBattle[0] = newCurrentOrderOfBattle;

//     const currentCrusadeCardAction : SetCurrentCursadeCardAction = {
//         type: SET_CURRENT_CRUSADE_CARD,
//         payload: {
//             currentCrusadeCard: {
//                 index,
//                 ...defaultCrusadeCard
//             }
//         }
//     };
//     const currentOrderOfBattleAction : SetCurrentOrderOfBattleAction = {
//         type: SET_CURRENT_ORDER_OF_BATTLE,
//         payload: {
//             currentOrderOfBattle: newCurrentOrderOfBattle
//         }
//     };
//     const ordersOfBattleAction : SetOrdersOfBattleAction = {
//         type: SET_ORDERS_OF_BATTLE,
//         payload: {
//             ordersOfBattle: newOrdersOfBattle
//         }
//     };

//     dispatch(currentCrusadeCardAction);
//     dispatch(currentOrderOfBattleAction);
//     dispatch(ordersOfBattleAction);
// };

// export const deleteCrusadeCard = (indexToDelete : number) : AppThunk => (dispatch, getState) => {
//     const {
//         currentOrderOfBattle,
//         ordersOfBattle
//     } = getState();
//     const crusadeCards = [
//         ...currentOrderOfBattle.crusadeCards
//     ];

//     crusadeCards.splice(indexToDelete, 1);

//     const newCurrentOrderOfBattle = {
//         ...currentOrderOfBattle,
//         crusadeCards
//     };

//     const newOrdersOfBattle = [...ordersOfBattle];
//     newOrdersOfBattle[0] = newCurrentOrderOfBattle;

//     const currentOrderOfBattleAction : SetCurrentOrderOfBattleAction = {
//         type: SET_CURRENT_ORDER_OF_BATTLE,
//         payload: {
//             currentOrderOfBattle: newCurrentOrderOfBattle
//         }
//     };
//     const ordersOfBattleAction : SetOrdersOfBattleAction = {
//         type: SET_ORDERS_OF_BATTLE,
//         payload: {
//             ordersOfBattle: newOrdersOfBattle
//         }
//     };

//     dispatch(currentOrderOfBattleAction);
//     dispatch(ordersOfBattleAction);
// };

// export const loadCurrentCrusadeCard = (selectedIndex : number) : AppThunk => (dispatch, getState) => {
//     const {
//         currentOrderOfBattle : {crusadeCards}
//     } = getState();

//     const action : SetCurrentCursadeCardAction = {
//         type: SET_CURRENT_CRUSADE_CARD,
//         payload: {
//             currentCrusadeCard: {
//                 index: selectedIndex,
//                 ...[...crusadeCards][selectedIndex]
//             }
//         }
//     };

//     dispatch(action);
// };
