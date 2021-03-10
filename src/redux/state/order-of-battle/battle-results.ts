import {v1} from 'react-native-uuid';

import {BattleOutcomes, Factions} from '../../../enums';

export class BattleResults {
    public id: string;
    public enemyFaction: Factions;
    public result: BattleOutcomes;
    public markedForGreatness?: string;
    public date: Date;

    constructor() {
        this.id = v1();
        this.enemyFaction = Factions.UNALIGNED;
        this.result = BattleOutcomes.DRAW;
        this.date = new Date();
    }
}
