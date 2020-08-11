import {RequisitionPoints} from '../../../types/literals';
import {defaultOrderOfBattle} from '../../types/order-of-battle';
import {LoadCurrentOrderOfBattleActions} from '../../actions/load-current-order-of-battle';
import {LOAD_CURRENT_ORDER_OF_BATTLE} from '../../../constants/action-list';

const setRequisitionPoints = (state: RequisitionPoints, requisitionPoints : RequisitionPoints) : RequisitionPoints => {
    return requisitionPoints || state;
};

export const requisitionPoints = (state : RequisitionPoints = defaultOrderOfBattle.requisitionPoints, action : LoadCurrentOrderOfBattleActions) : RequisitionPoints => {
    switch (action.type) {
    case LOAD_CURRENT_ORDER_OF_BATTLE:
        return setRequisitionPoints(state, action.payload.requisitionPoints);
    default:
        return state;
    }
};
