import {v1} from 'react-native-uuid';

import {BattleOutcomes, Factions} from '../../../enums';

export class BattleResults {
    id: string;
    enemyFaction: Factions;
    result: BattleOutcomes;
    markedForGreatness?: string;
    date: number;
    enemyName?: string;

    constructor() {
        this.id = v1();
        this.enemyFaction = Factions.UNALIGNED;
        this.result = BattleOutcomes.DRAW;
        this.date = new Date().getTime();
    }

    getDateString = ():string => {
        return new Date(this.date).toLocaleDateString();
    }

    getTitle = ():string => {
        return `${this.enemyName || this.enemyFaction} - ${this.result}`;
    }
}
