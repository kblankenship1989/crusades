import {player} from './player';
import {defaultPlayer, Player} from '../types/player';
import {UPDATE_PLAYER} from '../../constants/action-list';
import {PlayerAction} from '../actions/player';

describe('Given the player reducer', () => {
    describe('and an update to the player', () => {
        it('should store the updates to state', () => {
            const initialState : Player = {
                ...defaultPlayer,
                preferredFaction: 'Orks'
            };

            const action : PlayerAction= {
                type: UPDATE_PLAYER,
                meta: {
                    firstName: 'test',
                    middleName: 'test 2'
                }
            };

            const expectedState : Player = {
                ...initialState,
                ...action.meta
            };

            const returnedState : Player = player(initialState, action);

            expect(returnedState).toStrictEqual(expectedState);
        });
    });
});
