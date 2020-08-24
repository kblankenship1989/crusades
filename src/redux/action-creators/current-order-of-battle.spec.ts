import {Factions, factions} from '../../types/consts';
import {SET_CURRENT_ORDER_OF_BATTLE, SET_ORDERS_OF_BATTLE} from '../../constants/action-list';
import {defaultOrderOfBattle, OrderOfBattle} from '../types/order-of-battle';
import {createOrderOfBattle, loadSelectedOrderOfBattle, deleteSelectedOrderOfBattle, saveCurrentOrderOfBattle} from './current-order-of-battle';
import {ThunkDispatch} from 'redux-thunk';
import {SetOrdersOfBattleAction} from '../actions/orders-of-battle';
import {mockState, mockOrderOfBattle} from '../../../__test_utils__/mockStates';
import {SetCurrentOrderOfBattleAction} from '../actions/current-order-of-battle';
import {State} from '../types/state';
import {AvailableActions} from '../actions';

describe('Given the action to add a new order of battle', () => {
    it('should assign the provided title and faction to the current order of battle on state', () => {
        const title = 'Some awesome title';
        const faction : Factions = factions[3];
        const dispatchMock : ThunkDispatch<OrderOfBattle, unknown, AvailableActions> = jest.fn();
        const getStateMock = jest.fn();
        const stateMock : State= mockState({
            ordersOfBattle: [
                mockOrderOfBattle({title: 'title 1'}),
                mockOrderOfBattle({title: 'title 2'})
            ]
        });
        getStateMock.mockReturnValue(stateMock);

        const newOrderOfBattle = {
            ...defaultOrderOfBattle,
            title,
            faction
        };

        const expectedCurrentOrderOfBattleAction : SetCurrentOrderOfBattleAction = {
            type: SET_CURRENT_ORDER_OF_BATTLE,
            payload: {
                currentOrderOfBattle: newOrderOfBattle
            }
        };
        const expectedOrdersOfBattleAction : SetOrdersOfBattleAction = {
            type: SET_ORDERS_OF_BATTLE,
            payload: {
                ordersOfBattle: [
                    newOrderOfBattle,
                    ...stateMock.ordersOfBattle
                ]
            }
        };

        const action = createOrderOfBattle(title, faction);
        action(dispatchMock, getStateMock, undefined);

        expect(dispatchMock).toHaveBeenCalledTimes(2);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, expectedCurrentOrderOfBattleAction);
        expect(dispatchMock).toHaveBeenNthCalledWith(2, expectedOrdersOfBattleAction);
    });
});

describe('Given the action to load a selected order of battle', () => {
    it('should move the selected order of battle to the top of the list and load its summary', () => {
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

        const expectedCurrentOrderOfBattleAction : SetCurrentOrderOfBattleAction = {
            type: SET_CURRENT_ORDER_OF_BATTLE,
            payload: {
                currentOrderOfBattle: ordersOfBattle[1],
            }
        };
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

        expect(dispatchMock).toHaveBeenCalledTimes(2);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, expectedCurrentOrderOfBattleAction);
        expect(dispatchMock).toHaveBeenNthCalledWith(2, expectedOrdersOfBattleAction);
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

describe('Given the action to save the current changes to the current Order of Battle', () => {
    it('should dispatch the action with the currently updated order of battle and list of orders', () => {
        const updatedOrderOfBattle = mockOrderOfBattle();

        const stateMock = mockState({
            ordersOfBattle: [
                mockOrderOfBattle(),
                mockOrderOfBattle()
            ]
        });
        const getStateMock = jest.fn();
        getStateMock.mockReturnValue(stateMock);

        const dispatchMock: ThunkDispatch<OrderOfBattle, unknown, AvailableActions> = jest.fn();

        const expectedCurrentOrderOfBattleAction : SetCurrentOrderOfBattleAction = {
            type: SET_CURRENT_ORDER_OF_BATTLE,
            payload: {
                currentOrderOfBattle: updatedOrderOfBattle,
            }
        };
        const expectedOrdersOfBattleAction : SetOrdersOfBattleAction = {
            type: SET_ORDERS_OF_BATTLE,
            payload: {
                ordersOfBattle: [
                    updatedOrderOfBattle,
                    stateMock.ordersOfBattle[1]
                ]
            }
        };

        const action = saveCurrentOrderOfBattle(updatedOrderOfBattle);
        action(dispatchMock, getStateMock, undefined);

        expect(dispatchMock).toHaveBeenCalledTimes(2);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, expectedCurrentOrderOfBattleAction);
        expect(dispatchMock).toHaveBeenNthCalledWith(2, expectedOrdersOfBattleAction);
    });
});
