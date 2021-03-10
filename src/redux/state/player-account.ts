import {v1} from 'react-native-uuid';
import {Player} from './player';
import {OrderOfBattle} from './order-of-battle';
import {BattleOutcomesSummary} from '../../enums/battle-outcomes';

export class PlayerAccount {
    public id: string;
    public player: Player;
    public ordersOfBattle: Record<string, OrderOfBattle>;
    public lastAccessed: number;

    constructor() {
        this.id = v1();
        this.player = new Player();
        this.ordersOfBattle = {};
        this.lastAccessed = new Date().getTime();
    }

    getWinLoseDrawStats = ():Record<BattleOutcomesSummary, number> => {
        return Object.values(this.ordersOfBattle).reduce<Record<BattleOutcomesSummary, number>>(
            (stats, orderOfBattle):Record<BattleOutcomesSummary, number> => {
                const orderOfBattleStats = orderOfBattle.getWinLoseDrawStats();

                return {
                    [BattleOutcomesSummary.DRAW]: stats[BattleOutcomesSummary.DRAW] + orderOfBattleStats[BattleOutcomesSummary.DRAW],
                    [BattleOutcomesSummary.WIN]: stats[BattleOutcomesSummary.WIN] + orderOfBattleStats[BattleOutcomesSummary.WIN],
                    [BattleOutcomesSummary.LOSE]: stats[BattleOutcomesSummary.LOSE] + orderOfBattleStats[BattleOutcomesSummary.LOSE],
                };
            }, {
                [BattleOutcomesSummary.DRAW]: 0,
                [BattleOutcomesSummary.LOSE]: 0,
                [BattleOutcomesSummary.WIN]: 0
            });
    }
}
