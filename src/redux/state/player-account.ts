import {v1} from 'react-native-uuid';
import {defaultPlayer, Player} from './player';
import {OrderOfBattle} from './order-of-battle';

export type PlayerAccount = {
    id: string,
    player: Player,
    ordersOfBattle: Record<string, OrderOfBattle>,
    lastAccessed: number
};

export const getDefaultPlayerAccount = () : PlayerAccount => ({
    id: v1(),
    player: defaultPlayer,
    ordersOfBattle: {},
    lastAccessed: new Date().getTime()
});
