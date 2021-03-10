
import {ObjectiveTallies} from './objective-tallies';

export class CombatTallies {
    public battlesPlayed: number;
    public battlesSurvived: number;
    public currentBattleTally: ObjectiveTallies;
    public totalTally: ObjectiveTallies;

    constructor() {
        this.battlesPlayed = 0;
        this.battlesSurvived = 0;
        this.currentBattleTally = new ObjectiveTallies(true);
        this.totalTally = new ObjectiveTallies(false);
    }
}
