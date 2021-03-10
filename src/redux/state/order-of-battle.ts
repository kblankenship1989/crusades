import {v1} from 'react-native-uuid';

import {Factions} from '../../enums';
import {CrusadeCard} from './order-of-battle/crusade-card';
import {BattleResults} from './order-of-battle/battle-results';
import {BattleOutcomesSummary, battleOutcomesSummaryMap} from '../../enums/battle-outcomes';

export class OrderOfBattle {
    id:string;
    title?:string;
    faction:Factions;
    requisitionPoints:number;
    battleResults:Record<string,BattleResults>;
    supplyLimit:number;
    crusadeCards:Record<string,CrusadeCard>;
    lastAccessed:number;
    // goals?: string;
    // notableVictories?: string[];

    constructor(preferredFaction: Factions) {
        this.id = v1();
        this.faction = preferredFaction;
        this.requisitionPoints = 0;
        this.battleResults = {};
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
        return Object.values(this.battleResults).reduce<Record<BattleOutcomesSummary, number>>(
            (stats, battleResults):Record<BattleOutcomesSummary, number> => {
                const summary = battleOutcomesSummaryMap[battleResults.result];

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
