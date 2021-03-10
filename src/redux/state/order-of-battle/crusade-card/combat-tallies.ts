
import {ObjectiveTallies} from './objective-tallies';

export class CombatTallies {
    battlesPlayed: number;
    battlesSurvived: number;
    currentbattleResults: ObjectiveTallies;
    totalTally: ObjectiveTallies;

    constructor() {
        this.battlesPlayed = 0;
        this.battlesSurvived = 0;
        this.currentbattleResults = new ObjectiveTallies(true);
        this.totalTally = new ObjectiveTallies(false);
    }
}
