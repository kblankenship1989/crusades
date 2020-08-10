import {LoadCurrentOrderOfBattleActions} from '../../actions/load-current-order-of-battle';
import { LOAD_CURRENT_ORDER_OF_BATTLE } from '../../../constants/action-list';
import { defaultOrderOfBattle } from '../../types/order-of-battle';

const setTitle = (title : string) => {
    return title;
};

export const title = (state : string = defaultOrderOfBattle.title, action : LoadCurrentOrderOfBattleActions) : string => {
    switch (action.type) {
        case LOAD_CURRENT_ORDER_OF_BATTLE:
            return setTitle(action.payload.title);
        default:
            return state;
    }
};
