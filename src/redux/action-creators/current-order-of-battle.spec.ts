import {Factions, factions} from '../../types/consts';
import {LoadCurrentOrderOfBattleActions} from '../actions/load-current-order-of-battle';
import {LOAD_CURRENT_ORDER_OF_BATTLE} from '../../constants/action-list';
import {defaultOrderOfBattle, OrderOfBattle} from '../types/order-of-battle';
import {createOrderOfBattle} from './current-order-of-battle';
import {ThunkDispatch} from 'redux-thunk';

describe('Given the action to add a new order of battle', () => {
    it('should assign the provided title and faction to the current order of battle on state', () => {
        const title = 'Some awesome title';
        const faction : Factions = factions[3];
        const dispatchMock : ThunkDispatch<OrderOfBattle, unknown, LoadCurrentOrderOfBattleActions> = jest.fn();
        const getStateMock = jest.fn();

        const expectedAction : LoadCurrentOrderOfBattleActions = {
            type: LOAD_CURRENT_ORDER_OF_BATTLE,
            payload: {
                ...defaultOrderOfBattle,
                title,
                faction
            }
        };

        const action = createOrderOfBattle(title, faction);
        action(dispatchMock, getStateMock, undefined);

        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenCalledWith(expectedAction);
    });
});
