import {defaultCrusadeCard} from '../redux/state/crusade-card';
import {defaultOrderOfBattle} from '../redux/state/order-of-battle';
import {defaultPlayer} from '../redux/state/player';

export const mockCrusadeCard = (overrides? : Partial<CrusadeCard>) : CrusadeCard => ({
    ...defaultCrusadeCard,
    ...overrides
});

export const mockOrderOfBattle = (overrides? : Partial<OrderOfBattle>) : OrderOfBattle => ({
    ...defaultOrderOfBattle(),
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
    currentCrusadeCardIndex: 1,
    ...overrides
});
