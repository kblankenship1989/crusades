import {Factions} from '../../../types/consts';
import {defaultOrderOfBattle} from '../../types/order-of-battle';
import {LOAD_CURRENT_ORDER_OF_BATTLE, ADD_ORDER_OF_BATTLE} from '../../../constants/action-list';
import {OrdersOfBattleAction} from '../../actions/orders-of-battle';

const setFaction = (state : Factions , faction : Factions) : Factions => {
    return faction || state;
};

export const faction = (state : Factions = defaultOrderOfBattle.faction, action : OrdersOfBattleAction) : Factions => {
    switch (action.type) {
    case ADD_ORDER_OF_BATTLE:
    case LOAD_CURRENT_ORDER_OF_BATTLE:
        return setFaction(state, action.payload.faction);
    default:
        return state;
    }
};
