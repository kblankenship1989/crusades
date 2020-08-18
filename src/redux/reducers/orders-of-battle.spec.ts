import {ordersOfBattle} from './orders-of-battle';
import {OrderOfBattle} from '../types/order-of-battle';
import {mockOrderOfBattle} from '../../../__test_utils__/mockStates';
import {LoadCurrentOrderOfBattle, AddOrderOfBattle, DeleteOrderOfBattle} from '../actions/orders-of-battle';
import {ADD_ORDER_OF_BATTLE, LOAD_CURRENT_ORDER_OF_BATTLE, DELETE_ORDER_OF_BATTLE} from '../../constants/action-list';

describe('Given the orders of battle reducer', () => {
    it('should initialize the state when no store is presisted', () => {
        expect(ordersOfBattle(undefined, {type: 'some strange action'})).toStrictEqual([]);
    });

    describe('and an action to add a new order of battle', () => {
        it('should store the updates to state', () => {
            const initialState : OrderOfBattle[] = [
                mockOrderOfBattle({title: 'First Order'}),
                mockOrderOfBattle({title: 'Second Order'})
            ];

            const action : AddOrderOfBattle= {
                type: ADD_ORDER_OF_BATTLE,
                payload: {
                    currentOrderOfBattle: mockOrderOfBattle({title: 'Added order'})
                }
            };

            const expectedState : OrderOfBattle[] = [
                action.payload.currentOrderOfBattle,
                ...initialState
            ];

            const returnedState : OrderOfBattle[] = ordersOfBattle(initialState, action);

            expect(returnedState).toStrictEqual(expectedState);
        });
    });

    describe('and an action to select an existing order of battle', () => {
        it('should store the reordered list', () => {
            const initialState : OrderOfBattle[] = [
                mockOrderOfBattle({title: 'First Order'}),
                mockOrderOfBattle({title: 'Second Order'})
            ];

            const action : LoadCurrentOrderOfBattle= {
                type: LOAD_CURRENT_ORDER_OF_BATTLE,
                payload: {
                    currentOrderOfBattle: initialState[1],
                    ordersOfBattle: [
                        initialState[1],
                        initialState[0]
                    ]
                }
            };

            const expectedState : OrderOfBattle[] = action.payload.ordersOfBattle;

            const returnedState : OrderOfBattle[] = ordersOfBattle(initialState, action);

            expect(returnedState).toStrictEqual(expectedState);
        });
    });

    describe('and an action to delete an existing order of battle', () => {
        it('should store the reordered updated list with the deleted order removed', () => {
            const initialState : OrderOfBattle[] = [
                mockOrderOfBattle({title: 'First Order'}),
                mockOrderOfBattle({title: 'Second Order'})
            ];

            const action : DeleteOrderOfBattle= {
                type: DELETE_ORDER_OF_BATTLE,
                payload: {
                    ordersOfBattle: [
                        initialState[1]
                    ]
                }
            };

            const expectedState : OrderOfBattle[] = action.payload.ordersOfBattle;

            const returnedState : OrderOfBattle[] = ordersOfBattle(initialState, action);

            expect(returnedState).toStrictEqual(expectedState);
        });
    });
});
