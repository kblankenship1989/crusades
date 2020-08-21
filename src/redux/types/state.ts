import {Player} from './player';
import {OrderOfBattle} from './order-of-battle';
import {CrusadeCard} from './crusade-card';

export type State = {
    player: Player,
    ordersOfBattle: OrderOfBattle[],
    currentOrderOfBattle: OrderOfBattle,
    currentCrusadeCard: CrusadeCard
};
