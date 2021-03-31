import {v1} from 'react-native-uuid';

import {BattleOutcomes} from '../../../enums';
import {Opponent} from './battle-results/opponent';

export class BattleResults {
    id: string;
    opponent: Opponent;
    result: BattleOutcomes;
    markedForGreatness?: string;
    date: number;
    agendas: string[];
    mission?: string;
    victoryPoints: number

    constructor() {
        this.id = v1();
        this.opponent = new Opponent;
        this.result = BattleOutcomes.DRAW;
        this.date = new Date().getTime();
        this.agendas = [];
        this.victoryPoints = 0;
    }

    getDateString = ():string => {
        return new Date(this.date).toLocaleDateString();
    }

    getTitle = ():string => {
        return `${this.opponent.name || this.opponent.faction} - ${this.result}`;
    }
}
