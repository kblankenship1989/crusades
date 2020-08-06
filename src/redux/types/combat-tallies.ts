import {ObjectiveTallies} from "./objective-tallies";

export type CombatTallies = {
    battlesPlayed: number,
    battlesSurvived: number,
    currentBattleTally: ObjectiveTallies,
    totalTally: ObjectiveTallies
};
