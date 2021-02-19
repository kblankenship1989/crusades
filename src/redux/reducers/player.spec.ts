import {player} from './player';
import {defaultPlayer} from '../state/player';
import {ActionList} from '../../types/enums';

describe('Given the player reducer', () => {
    it('should initialize the state when no store is presisted', () => {
        expect(player(undefined, {type: 'some strange action'})).toStrictEqual(defaultPlayer);
    });

    describe('and an update to the player', () => {
        it('should store the updates to state', () => {
            const initialState : Player = {
                ...defaultPlayer,
                preferredFaction: 'Orks'
            };

            const action : UpdatePlayer = {
                type: ActionList.UPDATE_PLAYER,
                payload: {
                    firstName: 'test',
                    middleName: 'test 2'
                }
            };

            const expectedState : Player = {
                ...initialState,
                ...action.payload
            };

            const returnedState : Player = player(initialState, action);

            expect(returnedState).toStrictEqual(expectedState);
        });
    });
});
