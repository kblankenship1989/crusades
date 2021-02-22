
import {ObjectiveTallies, defaultObjectiveTallies, defaultObjectiveTalliesWithAgendas} from './objective-tallies';

export type CombatTallies = {
    battlesPlayed: number,
    battlesSurvived: number,
    currentBattleTally: ObjectiveTallies,
    totalTally: ObjectiveTallies
};

export const defaultCombatTallies : CombatTallies = {
    battlesPlayed: 0,
    battlesSurvived:0,
    currentBattleTally: defaultObjectiveTalliesWithAgendas,
    totalTally: defaultObjectiveTallies
}
;
