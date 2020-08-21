import {currentOrderOfBattle} from './current-order-of-battle';
import {mockOrderOfBattle} from '../../../__test_utils__/mockStates';
import {SetCurrentOrderOfBattleAction} from '../actions/current-order-of-battle';
import {SET_CURRENT_ORDER_OF_BATTLE} from '../../constants/action-list';

describe('Given the current order of battle reducer', () => {
    it('should update the current order of battle state to the selected order', () => {
        const expectedOrderOfBattle = mockOrderOfBattle({
            title: 'My awesome title'
        });
        const action : SetCurrentOrderOfBattleAction = {
            type: SET_CURRENT_ORDER_OF_BATTLE,
            payload: {
                currentOrderOfBattle: expectedOrderOfBattle
            }
        };
        const state = mockOrderOfBattle({
            title: 'A much less awesome title'
        });
        const actualOrderOfBattle = currentOrderOfBattle(state, action);

        expect(actualOrderOfBattle).toStrictEqual(expectedOrderOfBattle);
    });
});
