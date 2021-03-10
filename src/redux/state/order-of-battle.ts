import {v1} from 'react-native-uuid';

import {Factions} from '../../enums';
import {CrusadeCard} from './order-of-battle/crusade-card';
import {BattleResults} from './order-of-battle/battle-results';
import {BattleOutcomesSummary, battleOutcomesSummaryMap} from '../../enums/battle-outcomes';

export class OrderOfBattle {
    public id:string;
    public title?:string;
    public faction:Factions;
    public requisitionPoints:number;
    public battleTally:Record<string,BattleResults>;
    public supplyLimit:number;
    public crusadeCards:Record<string,CrusadeCard>;
    public lastAccessed:number;
    // public goals?: string;
    // public notableVictories?: string[];

    constructor(preferredFaction: Factions) {
        this.id = v1();
        this.faction = preferredFaction;
        this.requisitionPoints = 0;
        this.battleTally = {};
        this.crusadeCards = {};
        this.supplyLimit = 50;
        this.lastAccessed = new Date().getTime();
    }

    getSupplyUsed = ():number => {
        return Object.values(this.crusadeCards).reduce<number>((supplyUsed, crusadeCard): number => {
            if (crusadeCard.selected) {
                return supplyUsed + crusadeCard.powerRating;
            }

            return supplyUsed;
        }, 0);
    };

    getWinLoseDrawStats = ():Record<BattleOutcomesSummary, number> => {
        return Object.values(this.battleTally).reduce<Record<BattleOutcomesSummary, number>>(
            (stats, battleTally):Record<BattleOutcomesSummary, number> => {
                const summary = battleOutcomesSummaryMap[battleTally.result];

                return {
                    ...stats,
                    [summary]: stats[summary] + 1
                };
            }, {
                [BattleOutcomesSummary.DRAW]: 0,
                [BattleOutcomesSummary.LOSE]: 0,
                [BattleOutcomesSummary.WIN]: 0
            });
    }
}
