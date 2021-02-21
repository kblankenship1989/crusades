import {BattleOutcomes, Factions} from '../../types/enums';

export const defaultBattleResults : BattleResults = {
    enemyFaction: Factions.UNALIGNED,
    result: BattleOutcomes.DRAW,
    date: undefined,
    markedForGreatness: undefined
};
