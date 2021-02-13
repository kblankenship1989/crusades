import { CrusadeCard, defaultCrusadeCard, CurrentCrusadeCard, defaultCurrentCrusadeCard } from "../src/types/state/crusade-card";
import { OrderOfBattle, defaultOrderOfBattle } from "../src/types/state/order-of-battle";
import { Player, defaultPlayer } from "../src/types/state/player";
import { State } from "../src/types/state";

export const mockCrusadeCard = (overrides? : Partial<CrusadeCard>) : CrusadeCard => ({
    ...defaultCrusadeCard,
    ...overrides
});

export const mockCurrentCrusadeCard = (overrides? : Partial<CurrentCrusadeCard>) : CurrentCrusadeCard => ({
    ...defaultCurrentCrusadeCard,
    ...overrides
});

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
    currentCrusadeCard: mockCurrentCrusadeCard(),
    ...overrides
});
