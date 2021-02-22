import {v1} from 'react-native-uuid';
import {defaultPlayer, Player} from './player';
import {OrderOfBattle} from './order-of-battle';

export type PlayerAccount = {
    accountId: string,
    player: Player,
    ordersOfBattle: Record<string, OrderOfBattle>
};

export const getDefaultPlayerAccount = () : PlayerAccount => ({
    accountId: v1(),
    player: defaultPlayer,
    ordersOfBattle: {}
});
