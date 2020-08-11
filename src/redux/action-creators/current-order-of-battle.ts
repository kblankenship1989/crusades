import {Faction} from '../../types/literals';
import {LoadCurrentOrderOfBattleActions} from '../actions/load-current-order-of-battle';
import {LOAD_CURRENT_ORDER_OF_BATTLE} from '../../constants/action-list';
import {defaultOrderOfBattle} from '../types/order-of-battle';
import {AppThunk} from '../thunk';

export const createOrderOfBattle = (title: string, faction : Faction) : AppThunk => (dispatch) : void => {
    const action : LoadCurrentOrderOfBattleActions = {
        type: LOAD_CURRENT_ORDER_OF_BATTLE,
        payload: {
            ...defaultOrderOfBattle,
            title,
            faction
        }
    };

    dispatch(action);
};
