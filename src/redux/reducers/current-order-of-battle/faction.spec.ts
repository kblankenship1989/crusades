import {LOAD_CURRENT_ORDER_OF_BATTLE, ADD_ORDER_OF_BATTLE, SAVE_CURRENT_ORDER_OF_BATTLE} from '../../../constants/action-list';
import {faction} from './faction';
import {mockOrderOfBattle} from '../../../../__test_utils__/mockStates';
import {Factions, factions} from '../../../types/consts';
import {defaultOrderOfBattle} from '../../types/order-of-battle';
import {AddOrderOfBattle, LoadCurrentOrderOfBattle, SaveCurrentOrderOfBattle} from '../../actions/orders-of-battle';

describe('Given the faction reducer', () => {
    it('should default to an Unaligned on application load', () => {
        expect(faction(undefined, {type: 'some unknown action'})).toStrictEqual(defaultOrderOfBattle.faction);
    });

    it('should update the current order of battle state to the select order\'s faction', () => {
        const expectedFaction : Factions = factions[2];
        const selectedOrderOfBattle = mockOrderOfBattle({
            faction: expectedFaction
        });
        const action : LoadCurrentOrderOfBattle = {
            type: LOAD_CURRENT_ORDER_OF_BATTLE,
            payload: {
                currentOrderOfBattle: selectedOrderOfBattle,
                ordersOfBattle: []
            }
        };
        const state : Factions = factions[4];
        const actualFaction = faction(state, action);

        expect(actualFaction).toStrictEqual(expectedFaction);
    });

    it('should update the current order of battle state to the newly created order\'s faction', () => {
        const expectedFaction : Factions = factions[2];
        const newOrderOfBattle = mockOrderOfBattle({
            faction: expectedFaction
        });
        const action : AddOrderOfBattle = {
            type: ADD_ORDER_OF_BATTLE,
            payload: {
                currentOrderOfBattle: newOrderOfBattle
            }
        };
        const state : Factions = factions[4];
        const actualFaction = faction(state, action);

        expect(actualFaction).toStrictEqual(expectedFaction);
    });

    it('should update the current order of battle faction when saved', () => {
        const expectedFaction : Factions = factions[2];
        const newOrderOfBattle = mockOrderOfBattle({
            faction: expectedFaction
        });
        const action : SaveCurrentOrderOfBattle = {
            type: SAVE_CURRENT_ORDER_OF_BATTLE,
            payload: {
                currentOrderOfBattle: newOrderOfBattle
            }
        };
        const state : Factions = factions[4];
        const actualFaction = faction(state, action);

        expect(actualFaction).toStrictEqual(expectedFaction);
    });
});
