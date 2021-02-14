import {Player} from './player';
import {OrderOfBattle} from './order-of-battle';
import {CurrentCrusadeCard} from './crusade-card';

export type State = {
    player: Player,
    ordersOfBattle: OrderOfBattle[],
    currentCrusadeCard: CurrentCrusadeCard
};
