import {v1} from 'react-native-uuid';

import {Factions} from '../../enums';
import {CrusadeCard} from './order-of-battle/crusade-card';
import {BattleResults} from './order-of-battle/battle-results';

export type OrderOfBattle = {
    id: string,
    title?: string,
    faction: Factions,
    requisitionPoints: number,
    battleTally: Record<string, BattleResults>,
    supplyLimit: number,
    crusadeCards: Record<string, CrusadeCard>,
    lastAccessed: Date
    // goals?: string,
    // notableVictories?: string[]
}

export const getDefaultOrderOfBattle = () : OrderOfBattle => ({
    id: v1(),
    faction: Factions.UNALIGNED,
    requisitionPoints: 5,
    battleTally: {},
    supplyLimit: 50,
    crusadeCards: {},
    lastAccessed: new Date()
});
