import {OrderOfBattle} from "./order-of-battle";

export type RootParamList = {
    Home: undefined;
    OrderOfBattleSummary: { orderOfBattle: OrderOfBattle };
};
