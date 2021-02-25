import {v1} from 'react-native-uuid';

import {BattleOutcomes, Factions} from '../../../enums';

export type BattleResults = {
    id: string,
    enemyFaction: Factions,
    result: BattleOutcomes,
    markedForGreatness?: string,
    date: Date
}

export const getDefaultBattleResults = () : BattleResults => ({
    id: v1(),
    enemyFaction: Factions.UNALIGNED,
    result: BattleOutcomes.DRAW,
    date: new Date(),
    markedForGreatness: undefined
});
