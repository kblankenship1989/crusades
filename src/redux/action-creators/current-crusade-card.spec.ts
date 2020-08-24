import {mockCrusadeCard, mockState, mockOrderOfBattle} from '../../../__test_utils__/mockStates';
import {State} from '../types/state';
import {SetCurrentCursadeCardAction} from '../actions/current-crusade-card';
import {SET_CURRENT_CRUSADE_CARD, SET_ORDERS_OF_BATTLE, SET_CURRENT_ORDER_OF_BATTLE} from '../../constants/action-list';
import {SetCurrentOrderOfBattleAction} from '../actions/current-order-of-battle';
import {OrdersOfBattleAction} from '../actions/orders-of-battle';
import {ThunkDispatch} from 'redux-thunk';
import {AvailableActions} from '../actions';
import {saveCurrentCrusadeCard, addCrusadeCard, deleteCrusadeCard, loadCurrentCrusadeCard} from './current-crusade-card';
import {defaultCrusadeCard} from '../types/crusade-card';

describe('Given the action to save changes to the current crusade card', () => {
    it('should store the current crusade card to its provided index', () => {
        const expectedCurrentCrusadeCard = {
            ...mockCrusadeCard({
                name: 'Some cool name'
            }),
            index: 1
        };
        const stateMock : State = mockState({
            currentCrusadeCard: {
                ...mockCrusadeCard({
                    name: 'Some lame name'
                }),
                index: 1
            },
            currentOrderOfBattle: mockOrderOfBattle({
                title: 'Some different title',
                crusadeCards: [
                    mockCrusadeCard({name: 'Tile 1'}),
                    mockCrusadeCard({name: 'Title 2'})
                ]
            }),
            ordersOfBattle: [
                mockOrderOfBattle({
                    title: 'Some intereseting title',
                    crusadeCards: [
                        mockCrusadeCard({name: 'Title 1'}),
                    ]
                }),
                mockOrderOfBattle({
                    title: 'Some other intereseting title',
                    crusadeCards: [
                        mockCrusadeCard({name: 'Title 2'}),
                    ]
                })
            ]
        });

        const expectedCurrentCrusadeCardAction : SetCurrentCursadeCardAction = {
            type: SET_CURRENT_CRUSADE_CARD,
            payload: {
                currentCrusadeCard: expectedCurrentCrusadeCard
            }
        };
        const expectedCurrentOrderOfBattleAction : SetCurrentOrderOfBattleAction = {
            type: SET_CURRENT_ORDER_OF_BATTLE,
            payload: {
                currentOrderOfBattle: {

                    ...stateMock.currentOrderOfBattle,
                    crusadeCards: [
                        stateMock.currentOrderOfBattle.crusadeCards[0],
                        expectedCurrentCrusadeCard
                    ]
                }
            }
        };
        const expectedOrdersOfBattleAction : OrdersOfBattleAction = {
            type: SET_ORDERS_OF_BATTLE,
            payload: {
                ordersOfBattle: [
                    {
                        ...stateMock.currentOrderOfBattle,
                        crusadeCards: [
                            stateMock.currentOrderOfBattle.crusadeCards[0],
                            expectedCurrentCrusadeCard
                        ]
                    },
                    stateMock.ordersOfBattle[1]
                ]
            }
        };
        const dispatchMock : ThunkDispatch<State, unknown, AvailableActions> = jest.fn();
        const getStateMock = jest.fn();
        getStateMock.mockReturnValue(stateMock);

        const action = saveCurrentCrusadeCard(expectedCurrentCrusadeCard);
        action(dispatchMock, getStateMock, null);

        expect(dispatchMock).toHaveBeenCalledTimes(3);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, expectedCurrentCrusadeCardAction);
        expect(dispatchMock).toHaveBeenNthCalledWith(2, expectedCurrentOrderOfBattleAction);
        expect(dispatchMock).toHaveBeenNthCalledWith(3, expectedOrdersOfBattleAction);
    });
});

describe('Given the action to add a new crusade card', () => {
    it('should create a new crusade card at the bottom of the list and set it to the current one', () => {
        const expectedCurrentCrusadeCard = {
            ...defaultCrusadeCard,
            index: 2
        };
        const stateMock : State = mockState({
            currentCrusadeCard: {
                ...mockCrusadeCard({name: 'Some name I dont like'}),
                index: 1
            },
            currentOrderOfBattle: mockOrderOfBattle({
                title: 'Some different title',
                crusadeCards: [
                    mockCrusadeCard({name: 'Tile 1'}),
                    mockCrusadeCard({name: 'Title 2'})
                ]
            }),
            ordersOfBattle: [
                mockOrderOfBattle({
                    title: 'Some intereseting title',
                    crusadeCards: [
                        mockCrusadeCard({name: 'Title 1'}),
                    ]
                }),
                mockOrderOfBattle({
                    title: 'Some other intereseting title',
                    crusadeCards: [
                        mockCrusadeCard({name: 'Title 2'}),
                    ]
                })
            ]
        });

        const expectedCurrentCrusadeCardAction : SetCurrentCursadeCardAction = {
            type: SET_CURRENT_CRUSADE_CARD,
            payload: {
                currentCrusadeCard: expectedCurrentCrusadeCard
            }
        };
        const expectedCurrentOrderOfBattleAction : SetCurrentOrderOfBattleAction = {
            type: SET_CURRENT_ORDER_OF_BATTLE,
            payload: {
                currentOrderOfBattle: {

                    ...stateMock.currentOrderOfBattle,
                    crusadeCards: [
                        ...stateMock.currentOrderOfBattle.crusadeCards,
                        defaultCrusadeCard
                    ]
                }
            }
        };
        const expectedOrdersOfBattleAction : OrdersOfBattleAction = {
            type: SET_ORDERS_OF_BATTLE,
            payload: {
                ordersOfBattle: [
                    {
                        ...stateMock.currentOrderOfBattle,
                        crusadeCards: [
                            ...stateMock.currentOrderOfBattle.crusadeCards,
                            defaultCrusadeCard
                        ]
                    },
                    stateMock.ordersOfBattle[1]
                ]
            }
        };
        const dispatchMock : ThunkDispatch<State, unknown, AvailableActions> = jest.fn();
        const getStateMock = jest.fn();
        getStateMock.mockReturnValue(stateMock);

        const action = addCrusadeCard();
        action(dispatchMock, getStateMock, null);

        expect(dispatchMock).toHaveBeenCalledTimes(3);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, expectedCurrentCrusadeCardAction);
        expect(dispatchMock).toHaveBeenNthCalledWith(2, expectedCurrentOrderOfBattleAction);
        expect(dispatchMock).toHaveBeenNthCalledWith(3, expectedOrdersOfBattleAction);
    });
});

describe('Given the action to delete crusade card', () => {
    it('should remove the selected crusade card from the list', () => {
        const selectedIndex = 1;
        const stateMock : State = mockState({
            currentCrusadeCard: {
                ...mockCrusadeCard({name: 'Some name I dont like'}),
                index: 1
            },
            currentOrderOfBattle: mockOrderOfBattle({
                title: 'Some different title',
                crusadeCards: [
                    mockCrusadeCard({name: 'Tile 1'}),
                    mockCrusadeCard({name: 'Title 2'})
                ]
            }),
            ordersOfBattle: [
                mockOrderOfBattle({
                    title: 'Some intereseting title',
                    crusadeCards: [
                        mockCrusadeCard({name: 'Title 1'}),
                    ]
                }),
                mockOrderOfBattle({
                    title: 'Some other intereseting title',
                    crusadeCards: [
                        mockCrusadeCard({name: 'Title 2'}),
                    ]
                })
            ]
        });

        const expectedCurrentOrderOfBattleAction : SetCurrentOrderOfBattleAction = {
            type: SET_CURRENT_ORDER_OF_BATTLE,
            payload: {
                currentOrderOfBattle: {

                    ...stateMock.currentOrderOfBattle,
                    crusadeCards: [
                        stateMock.currentOrderOfBattle.crusadeCards[0]
                    ]
                }
            }
        };
        const expectedOrdersOfBattleAction : OrdersOfBattleAction = {
            type: SET_ORDERS_OF_BATTLE,
            payload: {
                ordersOfBattle: [
                    {
                        ...stateMock.currentOrderOfBattle,
                        crusadeCards: [
                            stateMock.currentOrderOfBattle.crusadeCards[0]
                        ]
                    },
                    stateMock.ordersOfBattle[1]
                ]
            }
        };
        const dispatchMock : ThunkDispatch<State, unknown, AvailableActions> = jest.fn();
        const getStateMock = jest.fn();
        getStateMock.mockReturnValue(stateMock);

        const action = deleteCrusadeCard(selectedIndex);
        action(dispatchMock, getStateMock, null);

        expect(dispatchMock).toHaveBeenCalledTimes(2);
        expect(dispatchMock).toHaveBeenNthCalledWith(1, expectedCurrentOrderOfBattleAction);
        expect(dispatchMock).toHaveBeenNthCalledWith(2, expectedOrdersOfBattleAction);
    });
});

describe('Given the action to load a selected crusade card', () => {
    it('should set the current crusade card to the selected one', () => {
        const selectedIndex = 1;
        const stateMock : State = mockState({
            currentCrusadeCard: {
                ...mockCrusadeCard({name: 'Some name I dont like'}),
                index: 1
            },
            currentOrderOfBattle: mockOrderOfBattle({
                title: 'Some different title',
                crusadeCards: [
                    mockCrusadeCard({name: 'Tile 1'}),
                    mockCrusadeCard({name: 'Title 2'})
                ]
            })
        });

        const expectedAction : SetCurrentCursadeCardAction = {
            type: SET_CURRENT_CRUSADE_CARD,
            payload: {
                currentCrusadeCard: {
                    ...stateMock.currentOrderOfBattle.crusadeCards[selectedIndex],
                    index: selectedIndex
                }
            }
        };

        const dispatchMock : ThunkDispatch<State, unknown, AvailableActions> = jest.fn();
        const getStateMock = jest.fn();
        getStateMock.mockReturnValue(stateMock);

        const action = loadCurrentCrusadeCard(selectedIndex);
        action(dispatchMock, getStateMock, null);

        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenCalledWith(expectedAction);
    });
});
