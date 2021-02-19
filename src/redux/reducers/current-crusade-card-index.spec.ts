import {currentCrusadeCardIndex} from './current-crusade-card-index';

describe('Given the current crusade card reducer', () => {
    it('should update the current crusade card state to the selected card', () => {
        const action = {
            type: 'SET_CURRENT_CRUSADE_CARD_INDEX',
            payload: {
                currentCrusadeCardIndex: 2
            }
        };
        const state = 1;

        const actualIndex = currentCrusadeCardIndex(state, action);

        expect(actualIndex).toStrictEqual(2);
    });
});
