import {Factions, factions} from '../../types/consts';
import {ADD_ORDER_OF_BATTLE, LOAD_CURRENT_ORDER_OF_BATTLE, DELETE_ORDER_OF_BATTLE} from '../../constants/action-list';
import {defaultOrderOfBattle, OrderOfBattle} from '../types/order-of-battle';
import {createOrderOfBattle, loadSelectedOrderOfBattle, deleteSelectedOrderOfBattle} from './current-order-of-battle';
import {ThunkDispatch} from 'redux-thunk';
import {AddOrderOfBattle, OrdersOfBattleAction, LoadCurrentOrderOfBattle, DeleteOrderOfBattle} from '../actions/orders-of-battle';
import {mockState, mockOrderOfBattle} from '../../../__test_utils__/mockStates';

describe('Given the action to add a new order of battle', () => {
    it('should assign the provided title and faction to the current order of battle on state', () => {
        const title = 'Some awesome title';
        const faction : Factions = factions[3];
        const dispatchMock : ThunkDispatch<OrderOfBattle, unknown, OrdersOfBattleAction> = jest.fn();
        const getStateMock = jest.fn();

        const expectedAction : AddOrderOfBattle = {
            type: ADD_ORDER_OF_BATTLE,
            payload: {
                currentOrderOfBattle: {
                    ...defaultOrderOfBattle,
                    title,
                    faction
                }
            }
        };

        const action = createOrderOfBattle(title, faction);
        action(dispatchMock, getStateMock, undefined);

        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenCalledWith(expectedAction);
    });
});

describe('Given the action to load a selected order of battle', () => {
    it('should move the selected index to the top of the list of current orders of battle and load the selected one', () => {
        const selectedIndex = 1;
        const ordersOfBattle = [
            mockOrderOfBattle(),
            mockOrderOfBattle(),
            mockOrderOfBattle()
        ];
        const state = mockState({
            ordersOfBattle
        });
        const dispatchMock : ThunkDispatch<OrderOfBattle, unknown, OrdersOfBattleAction> = jest.fn();
        const getStateMock = jest.fn();

        getStateMock.mockReturnValue(state);

        const expectedAction : LoadCurrentOrderOfBattle = {
            type: LOAD_CURRENT_ORDER_OF_BATTLE,
            payload: {
                currentOrderOfBattle: ordersOfBattle[1],
                ordersOfBattle: [
                    ordersOfBattle[1],
                    ordersOfBattle[0],
                    ordersOfBattle[2]
                ]
            }
        };

        const action = loadSelectedOrderOfBattle(selectedIndex);
        action(dispatchMock, getStateMock, undefined);

        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenCalledWith(expectedAction);
    });
});

describe('Given the action to delete a selected order of battle', () => {
    it('should remove the selected index from the list of current orders of battle', () => {
        const selectedIndex = 1;
        const ordersOfBattle = [
            mockOrderOfBattle(),
            mockOrderOfBattle(),
            mockOrderOfBattle()
        ];
        const state = mockState({
            ordersOfBattle
        });
        const dispatchMock : ThunkDispatch<OrderOfBattle, unknown, OrdersOfBattleAction> = jest.fn();
        const getStateMock = jest.fn();

        getStateMock.mockReturnValue(state);

        const expectedAction : DeleteOrderOfBattle = {
            type: DELETE_ORDER_OF_BATTLE,
            payload: {
                ordersOfBattle: [
                    ordersOfBattle[0],
                    ordersOfBattle[2]
                ]
            }
        };

        const action = deleteSelectedOrderOfBattle(selectedIndex);
        action(dispatchMock, getStateMock, undefined);

        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenCalledWith(expectedAction);
    });
});
