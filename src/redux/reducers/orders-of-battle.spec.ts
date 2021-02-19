import {ordersOfBattle} from './orders-of-battle';
import {mockOrderOfBattle} from '../../__test_utils__/mockStates';
import {ActionList} from '../../types/enums';

describe('Given the orders of battle reducer', () => {
    describe('and the list of orders of battle is updated', () => {
        it('should store the updates to state', () => {
            const initialState : OrderOfBattle[] = [
                mockOrderOfBattle({title: 'First Order'}),
                mockOrderOfBattle({title: 'Second Order'})
            ];

            const action : OrdersOfBattleAction = {
                type: ActionList.SET_ORDERS_OF_BATTLE,
                payload: {
                    ordersOfBattle: [
                        mockOrderOfBattle({title: 'Added order'}),
                        ...initialState
                    ]
                }
            };

            const expectedState : OrderOfBattle[] = action.payload.ordersOfBattle;

            const returnedState : OrderOfBattle[] = ordersOfBattle(initialState, action);

            expect(returnedState).toStrictEqual(expectedState);
        });
    });
});
