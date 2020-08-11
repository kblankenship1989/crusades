import {Faction} from '../../../types/literals';
import {defaultOrderOfBattle} from '../../types/order-of-battle';
import {LoadCurrentOrderOfBattleActions} from '../../actions/load-current-order-of-battle';
import {LOAD_CURRENT_ORDER_OF_BATTLE} from '../../../constants/action-list';

const setFaction = (state : Faction , faction : Faction) : Faction => {
    return faction || state;
};

export const faction = (state : Faction = defaultOrderOfBattle.faction, action : LoadCurrentOrderOfBattleActions) : Faction => {
    switch (action.type) {
    case LOAD_CURRENT_ORDER_OF_BATTLE:
        return setFaction(state, action.payload.faction);
    default:
        return state;
    }
};
