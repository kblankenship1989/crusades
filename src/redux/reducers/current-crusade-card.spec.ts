import {SET_CURRENT_CRUSADE_CARD} from '../../constants/action-list';
import {currentCrusadeCard} from './current-crusade-card';
import {mockCrusadeCard} from '../../../__test_utils__/mockStates';
import {Factions, factions} from '../../types/consts';
import {SetCurrentCursadeCardAction} from '../actions/current-crusade-card';
import {CrusadeCard} from '../types/crusade-card';

describe('Given the current crusade card reducer', () => {
    it('should update the current crusade card state to the selected card', () => {
        const expectedCrusadeCard : CrusadeCard = mockCrusadeCard({
            name: 'Some awesome name'
        });
        const action : SetCurrentCursadeCardAction = {
            type: SET_CURRENT_CRUSADE_CARD,
            payload: {
                currentCrusadeCard: expectedCrusadeCard
            }
        };
        const state : CrusadeCard = mockCrusadeCard({
            name: 'A less awesome name'
        });
        const actualFaction = currentCrusadeCard(state, action);

        expect(actualFaction).toStrictEqual(expectedCrusadeCard);
    });
});
