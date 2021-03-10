import {v1} from 'react-native-uuid';

import {BattleOutcomes, Factions} from '../../../enums';

export class BattleResults {
    id: string;
    enemyFaction: Factions;
    result: BattleOutcomes;
    markedForGreatness?: string;
    date: Date;

    constructor() {
        this.id = v1();
        this.enemyFaction = Factions.UNALIGNED;
        this.result = BattleOutcomes.DRAW;
        this.date = new Date();
    }
}
