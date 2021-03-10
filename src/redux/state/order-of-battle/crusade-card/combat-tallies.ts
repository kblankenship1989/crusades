
import {ObjectiveTallies} from './objective-tallies';

export class CombatTallies {
    battlesPlayed: number;
    battlesSurvived: number;
    currentBattleTally: ObjectiveTallies;
    totalTally: ObjectiveTallies;

    constructor() {
        this.battlesPlayed = 0;
        this.battlesSurvived = 0;
        this.currentBattleTally = new ObjectiveTallies(true);
        this.totalTally = new ObjectiveTallies(false);
    }
}
