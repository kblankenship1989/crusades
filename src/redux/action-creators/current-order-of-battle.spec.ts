import {Factions, factions} from '../../types/consts';
import {ADD_ORDER_OF_BATTLE} from '../../constants/action-list';
import {defaultOrderOfBattle, OrderOfBattle} from '../types/order-of-battle';
import {createOrderOfBattle} from './current-order-of-battle';
import {ThunkDispatch} from 'redux-thunk';
import {AddOrderOfBattle, OrdersOfBattleAction} from '../actions/orders-of-battle';

describe('Given the action to add a new order of battle', () => {
    it('should assign the provided title and faction to the current order of battle on state', () => {
        const title = 'Some awesome title';
        const faction : Factions = factions[3];
        const dispatchMock : ThunkDispatch<OrderOfBattle, unknown, OrdersOfBattleAction> = jest.fn();
        const getStateMock = jest.fn();

        const expectedAction : AddOrderOfBattle = {
            type: ADD_ORDER_OF_BATTLE,
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
