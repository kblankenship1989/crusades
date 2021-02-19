import {Action, AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {ActionList} from './enums';

declare global {
    type SetCurrentCursadeCardIndexAction = Action<ActionList.SET_CURRENT_CRUSADE_CARD_INDEX> & {
        payload: {
            currentCrusadeCardIndex: number
        }
    }

    type CurrentCrusadeCardIndexActions = SetCurrentCursadeCardIndexAction | AnyAction

    type SetOrdersOfBattleAction = Action<ActionList.SET_ORDERS_OF_BATTLE> & {
        payload: {
            ordersOfBattle: OrderOfBattle[]
        }
    }

    type OrdersOfBattleAction = SetOrdersOfBattleAction | AnyAction

    type UpdatePlayer = Action<ActionList.UPDATE_PLAYER> & {
        payload: Partial<Player>
    }

    type PlayerAction = UpdatePlayer | AnyAction

    type AvailableActions = PlayerAction | OrdersOfBattleAction | CurrentCrusadeCardIndexActions | AnyAction

     type AppThunk<ReturnType = void> = ThunkAction<
        ReturnType,
        State,
        unknown,
        AvailableActions
    >
}
