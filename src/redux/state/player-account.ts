import {v1} from 'react-native-uuid';
import Player from './player';
import {OrderOfBattle} from './order-of-battle';
import {BattleOutcomesSummary} from '../../enums/battle-outcomes';

export class PlayerAccount {
    _id: string;
    _player: Player;
    _ordersOfBattle: Record<string, OrderOfBattle>;
    _lastAccessed: number;

    constructor(prevAccount?: PlayerAccount) {
        if (prevAccount) {
            this._id = prevAccount.id;
            this._player = prevAccount.player;
            this._ordersOfBattle = prevAccount.ordersOfBattle;
            this._lastAccessed = prevAccount.lastAccessed;
        } else {
            this._id = v1();
            this._player = new Player();
            this._ordersOfBattle = {};
            this._lastAccessed = new Date().getTime();
        }
    }

    get id(): string {
        return this._id;
    }

    get player(): Player {
        return this._player;
    }

    set player(player: Player) {
        this._player = player;
    }

    get ordersOfBattle(): Record<string, OrderOfBattle> {
        return this._ordersOfBattle;
    }

    set ordersOfBattle(ordersOfBattle: Record<string, OrderOfBattle>) {
        this._ordersOfBattle = ordersOfBattle;
    }

    get lastAccessedDate(): string {
        return new Date(this._lastAccessed).toLocaleDateString();
    }

    get lastAccessed(): number {
        return this._lastAccessed;
    }

    set lastAccessed(lastAccessed: number) {
        this._lastAccessed = lastAccessed;
    }

    getWinLoseDrawStats = ():Record<BattleOutcomesSummary, number> => {
        return Object.values(this._ordersOfBattle).reduce<Record<BattleOutcomesSummary, number>>(
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
