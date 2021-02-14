import {ThunkDispatch} from 'redux-thunk';

import {OrderOfBattle, defaultOrderOfBattle} from '../../types/state/order-of-battle';
import {State} from '../../types/state';
import {SET_CURRENT_ORDER_OF_BATTLE, SET_ORDERS_OF_BATTLE} from '../../constants/action-list';
import {SetOrdersOfBattleAction} from '../actions/orders-of-battle';
import {AvailableActions} from '../actions';
import {mockState, mockOrderOfBattle} from '../../../__test_utils__/mockStates';

import {createOrderOfBattle, loadSelectedOrderOfBattle, deleteSelectedOrderOfBattle, saveCurrentOrderOfBattle} from './orders-of-battle';

describe('Given the action to add a new order of battle', () => {
    it('should add a new default order of battle at the top of the list', () => {
        const dispatchMock : ThunkDispatch<OrderOfBattle, unknown, AvailableActions> = jest.fn();
        const getStateMock = jest.fn();
        const stateMock : State = mockState({
            ordersOfBattle: [
                mockOrderOfBattle({title: 'title 1'}),
                mockOrderOfBattle({title: 'title 2'})
            ]
        });
        getStateMock.mockReturnValue(stateMock);

        const newOrderOfBattle = defaultOrderOfBattle();

        const expectedOrdersOfBattleAction : SetOrdersOfBattleAction = {
            type: SET_ORDERS_OF_BATTLE,
            payload: {
                ordersOfBattle: [
                    newOrderOfBattle,
                    ...stateMock.ordersOfBattle
                ]
            }
        };

        const action = createOrderOfBattle();
        action(dispatchMock, getStateMock, undefined);

        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenCalledWith(expectedOrdersOfBattleAction);
    });
});

describe('Given the action to load a selected order of battle', () => {
    it('should move the selected order of battle to the top of the list', () => {
        const selectedIndex = 1;
        const ordersOfBattle = [
            mockOrderOfBattle({
                id: 5,
                title: 'Title 1'
            }),
            mockOrderOfBattle({
                id: 7,
                title: 'Title 2'
            }),
            mockOrderOfBattle({
                id: 9,
                title: 'Title 3'
            })
        ];
        const state = mockState({
            ordersOfBattle
        });
        const dispatchMock : ThunkDispatch<OrderOfBattle, unknown, AvailableActions> = jest.fn();
        const getStateMock = jest.fn();

        getStateMock.mockReturnValue(state);

        const expectedOrdersOfBattleAction : SetOrdersOfBattleAction = {
            type: SET_ORDERS_OF_BATTLE,
            payload: {
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
        expect(dispatchMock).toHaveBeenCalledWith(expectedOrdersOfBattleAction);
    });
});

describe('Given the action to delete a selected order of battle', () => {
    it('should remove the selected index from the list of current orders of battle', () => {
        const selectedIndex = 1;
        const ordersOfBattle = [
            mockOrderOfBattle({
                title: 'Title 1'
            }),
            mockOrderOfBattle({
                title: 'Title 2'
            }),
            mockOrderOfBattle({
                title: 'Title 3'
            })
        ];
        const state = mockState({
            ordersOfBattle
        });
        const dispatchMock : ThunkDispatch<OrderOfBattle, unknown, AvailableActions> = jest.fn();
        const getStateMock = jest.fn();

        getStateMock.mockReturnValue(state);

        const expectedAction :SetOrdersOfBattleAction = {
            type: SET_ORDERS_OF_BATTLE,
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

describe('Given the action to save the current changes to an order of battle', () => {
    it('should save the changes to the first order of battle in the list', () => {
        const updatedOrderOfBattle : Partial<OrderOfBattle> = {
            title: 'some cooler title'
        };

        const stateMock = mockState({
            ordersOfBattle: [
                mockOrderOfBattle({title: 'some title'}),
                mockOrderOfBattle({title: 'some other title'})
            ]
        });
        const getStateMock = jest.fn();
        getStateMock.mockReturnValue(stateMock);

        const dispatchMock: ThunkDispatch<OrderOfBattle, unknown, AvailableActions> = jest.fn();

        const expectedOrdersOfBattleAction : SetOrdersOfBattleAction = {
            type: SET_ORDERS_OF_BATTLE,
            payload: {
                ordersOfBattle: [
                    {
                        ...stateMock.ordersOfBattle[0],
                        ...updatedOrderOfBattle
                    },
                    stateMock.ordersOfBattle[1]
                ]
            }
        };

        const action = saveCurrentOrderOfBattle(updatedOrderOfBattle);
        action(dispatchMock, getStateMock, undefined);

        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenCalledWith(expectedOrdersOfBattleAction);
    });
});
