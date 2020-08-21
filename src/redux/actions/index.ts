import {PlayerAction} from './player';
import {OrdersOfBattleAction} from './orders-of-battle';
import {CurrentCrusadeCardActions} from './current-crusade-card';
import {CurrentOrderOfBattleActions} from './current-order-of-battle';

export type AvailableActions = PlayerAction | OrdersOfBattleAction | CurrentCrusadeCardActions | CurrentOrderOfBattleActions;
