import {RequisitionPoints} from '../../../types/literals';
import {defaultOrderOfBattle} from '../../types/order-of-battle';
import {LOAD_CURRENT_ORDER_OF_BATTLE, ADD_ORDER_OF_BATTLE} from '../../../constants/action-list';
import {OrdersOfBattleAction} from '../../actions/orders-of-battle';

const setRequisitionPoints = (state: RequisitionPoints, requisitionPoints : RequisitionPoints) : RequisitionPoints => {
    return requisitionPoints || state;
};

export const requisitionPoints = (state : RequisitionPoints = defaultOrderOfBattle.requisitionPoints, action : OrdersOfBattleAction) : RequisitionPoints => {
    switch (action.type) {
    case ADD_ORDER_OF_BATTLE:
    case LOAD_CURRENT_ORDER_OF_BATTLE:
        return setRequisitionPoints(state, action.payload.currentOrderOfBattle.requisitionPoints);
    default:
        return state;
    }
};
