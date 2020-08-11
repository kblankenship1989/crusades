
import {LOAD_CURRENT_ORDER_OF_BATTLE} from '../../../constants/action-list';
import {title} from './title';
import {LoadCurrentOrderOfBattleActions} from '../../actions/load-current-order-of-battle';
import {mockOrderOfBattle} from '../../../../__test_utils__/mockStates';
import {defaultOrderOfBattle} from '../../types/order-of-battle';

describe('Given the title reducer', () => {
    it('should default to an empty string on application load', () => {
        expect(title(undefined, {type: 'some unknown action'})).toStrictEqual(defaultOrderOfBattle.title);
    });

    it('should update the current order of battle state to the select order\'s title', () => {
        const expectedTitle = 'My Awesome Title';
        const selectedOrderOfBattle = mockOrderOfBattle({
            title: expectedTitle
        });
        const action : LoadCurrentOrderOfBattleActions = {
            type: LOAD_CURRENT_ORDER_OF_BATTLE,
            payload: selectedOrderOfBattle
        };
        const state = 'A much less awesome title';
        const actualTitle = title(state, action);

        expect(actualTitle).toStrictEqual(expectedTitle);
    });
});
