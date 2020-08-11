import {LOAD_CURRENT_ORDER_OF_BATTLE} from '../../../constants/action-list';
import {faction} from './faction';
import {LoadCurrentOrderOfBattleActions} from '../../actions/load-current-order-of-battle';
import {mockOrderOfBattle} from '../../../../__test_utils__/mockStates';
import {Faction} from '../../../types/literals';
import {defaultOrderOfBattle} from '../../types/order-of-battle';

describe('Given the faction reducer', () => {
    it('should default to an Unaligned on application load', () => {
        expect(faction(undefined, {type: 'some unknown action'})).toStrictEqual(defaultOrderOfBattle.faction);
    });

    it('should update the current order of battle state to the select order\'s faction', () => {
        const expectedFaction : Faction = 'Orks';
        const selectedOrderOfBattle = mockOrderOfBattle({
            faction: expectedFaction
        });
        const action : LoadCurrentOrderOfBattleActions = {
            type: LOAD_CURRENT_ORDER_OF_BATTLE,
            payload: selectedOrderOfBattle
        };
        const state : Faction = 'Aeldari';
        const actualFaction = faction(state, action);

        expect(actualFaction).toStrictEqual(expectedFaction);
    });
});
