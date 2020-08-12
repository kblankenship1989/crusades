import {Factions} from '../../../types/consts';
import {defaultOrderOfBattle} from '../../types/order-of-battle';
import {LoadCurrentOrderOfBattleActions} from '../../actions/load-current-order-of-battle';
import {LOAD_CURRENT_ORDER_OF_BATTLE} from '../../../constants/action-list';

const setFaction = (state : Factions , faction : Factions) : Factions => {
    return faction || state;
};

export const faction = (state : Factions = defaultOrderOfBattle.faction, action : LoadCurrentOrderOfBattleActions) : Factions => {
    switch (action.type) {
    case LOAD_CURRENT_ORDER_OF_BATTLE:
        return setFaction(state, action.payload.faction);
    default:
        return state;
    }
};
