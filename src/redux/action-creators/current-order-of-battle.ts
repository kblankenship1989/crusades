import {Factions} from '../../types/consts';
import {ADD_ORDER_OF_BATTLE} from '../../constants/action-list';
import {defaultOrderOfBattle} from '../types/order-of-battle';
import {AppThunk} from '../thunk';
import {AddOrderOfBattle} from '../actions/orders-of-battle';

export const createOrderOfBattle = (title: string, faction : Factions) : AppThunk => (dispatch) : void => {
    const action : AddOrderOfBattle = {
        type: ADD_ORDER_OF_BATTLE,
        payload: {
            ...defaultOrderOfBattle,
            title,
            faction
        }
    };

    dispatch(action);
};
