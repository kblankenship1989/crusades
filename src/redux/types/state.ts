import {Player} from './player';
import {OrderOfBattle} from './order-of-battle';

export type State = {
    player: Player,
    ordersOfBattle: OrderOfBattle[],
    currentOrderOfBattle: OrderOfBattle
};
