import {LOAD_CURRENT_ORDER_OF_BATTLE} from '../../../constants/action-list';
import {requisitionPoints} from './requisition-points';
import {LoadCurrentOrderOfBattleActions} from '../../actions/load-current-order-of-battle';
import {mockOrderOfBattle} from '../../../../__test_utils__/mockStates';
import {RequisitionPoints} from '../../../types/literals';
import {defaultOrderOfBattle} from '../../types/order-of-battle';

describe('Given the requisition points reducer', () => {
    it('should default to an 5 on application load', () => {
        expect(requisitionPoints(undefined, {type: 'some unknown action'})).toStrictEqual(defaultOrderOfBattle.requisitionPoints);
    });

    it('should update the current order of battle state to the select order\'s requisition points', () => {
        const expectedRequisitionPoints : RequisitionPoints = 3;
        const selectedOrderOfBattle = mockOrderOfBattle({
            requisitionPoints: expectedRequisitionPoints
        });
        const action : LoadCurrentOrderOfBattleActions = {
            type: LOAD_CURRENT_ORDER_OF_BATTLE,
            payload: selectedOrderOfBattle
        };
        const state : RequisitionPoints = 1;
        const actualRequisitionPoints = requisitionPoints(state, action);

        expect(actualRequisitionPoints).toStrictEqual(expectedRequisitionPoints);
    });
});
