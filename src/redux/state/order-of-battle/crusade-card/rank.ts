import {BattleHonours, BattleScars} from '../../../../enums';

export class Rank {
    isBlooded: boolean;
    isBattleHardened: boolean;
    isHeroic: boolean;
    isLegendary: boolean;
    battleHonours: Record<string, BattleHonours>;
    battleScars: Record<string, BattleScars>;

    constructor() {
        this.isBattleHardened = false;
        this.isBlooded = false;
        this.isHeroic = false;
        this.isLegendary = false;
        this.battleHonours = {};
        this.battleScars = {};
    }
}
