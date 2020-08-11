import {LoadCurrentOrderOfBattleActions} from '../../actions/load-current-order-of-battle';
import {LOAD_CURRENT_ORDER_OF_BATTLE} from '../../../constants/action-list';
import {defaultOrderOfBattle} from '../../types/order-of-battle';

const setTitle = (state: string, title : string) => {
    return title || state;
};

export const title = (state : string = defaultOrderOfBattle.title, action : LoadCurrentOrderOfBattleActions) : string => {
    switch (action.type) {
    case LOAD_CURRENT_ORDER_OF_BATTLE:
        return setTitle(state, action.payload.title);
    default:
        return state;
    }
};
