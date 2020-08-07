import {ordersOfBattle} from './orders-of-battle';
import {OrderOfBattle} from '../types/order-of-battle';
import {mockOrderOfBattle} from '../../../__test_utils__/mockStates';
import {OrdersOfBattleAction} from '../actions/orders-of-battle';
import {ADD_ORDER_OF_BATTLE} from '../../constants/action-list';

describe('Given the orders of battle reducer', () => {
    it('should initialize the state when no store is presisted', () => {
        expect(ordersOfBattle(undefined, {type: 'some strange action'})).toStrictEqual([]);
    });

    describe('and an update to the player', () => {
        it('should store the updates to state', () => {
            const initialState : OrderOfBattle[] = [
                mockOrderOfBattle({title: 'First Order'}),
                mockOrderOfBattle({title: 'Second Order'})
            ];

            const action : OrdersOfBattleAction= {
                type: ADD_ORDER_OF_BATTLE,
                payload: mockOrderOfBattle({title: 'Added order'})
            };

            const expectedState : OrderOfBattle[] = [
                ...initialState,
                action.payload
            ];

            const returnedState : OrderOfBattle[] = ordersOfBattle(initialState, action);

            expect(returnedState).toStrictEqual(expectedState);
        });
    });
});
