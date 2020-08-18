import {LOAD_CURRENT_ORDER_OF_BATTLE, ADD_ORDER_OF_BATTLE} from '../../../constants/action-list';
import {defaultOrderOfBattle} from '../../types/order-of-battle';
import {OrdersOfBattleAction} from '../../actions/orders-of-battle';

const setTitle = (state: string, title : string) => {
    return title || state;
};

export const title = (state : string = defaultOrderOfBattle.title, action : OrdersOfBattleAction) : string => {
    switch (action.type) {
    case ADD_ORDER_OF_BATTLE:
    case LOAD_CURRENT_ORDER_OF_BATTLE:
        return setTitle(state, action.payload.currentOrderOfBattle.title);
    default:
        return state;
    }
};
