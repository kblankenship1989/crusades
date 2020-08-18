import {OrderOfBattle, defaultOrderOfBattle} from '../src/redux/types/order-of-battle';
import {Player, defaultPlayer} from '../src/redux/types/player';
import {State} from '../src/redux/types/state';

export const mockOrderOfBattle = (overrides? : Partial<OrderOfBattle>) : OrderOfBattle => ({
    ...defaultOrderOfBattle,
    ...overrides
});

export const mockPlayer = (overrides? : Partial<Player>) : Player => ({
    ...defaultPlayer,
    ...overrides
});

export const mockState = (overrides? : Partial<State>) : State => ({
    player: mockPlayer(),
    ordersOfBattle: [
        mockOrderOfBattle(),
        mockOrderOfBattle(),
        mockOrderOfBattle()
    ],
    currentOrderOfBattle: mockOrderOfBattle(),
    ...overrides
});
