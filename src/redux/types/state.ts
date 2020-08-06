import {Player} from "./player";
import {OrderOfBattle} from "./order-of-battle";

export type State = {
    ordersOfBattle: OrderOfBattle[],
    player: Player
};
