import {OrderOfBattle, defaultOrderOfBattle} from "../src/redux/types/order-of-battle";

export const mockOrderOfBattle = (overrides? : Partial<OrderOfBattle>) : OrderOfBattle => ({
    ...defaultOrderOfBattle,
    ...overrides
});
