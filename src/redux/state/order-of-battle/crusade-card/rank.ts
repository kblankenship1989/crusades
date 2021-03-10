import {BattleHonours, BattleScars} from '../../../../enums';

export class Rank {
    public isBlooded: boolean;
    public isBattleHardened: boolean;
    public isHeroic: boolean;
    public isLegendary: boolean;
    public battleHonours: Record<string, BattleHonours>;
    public battleScars: Record<string, BattleScars>;

    constructor() {
        this.isBattleHardened = false;
        this.isBlooded = false;
        this.isHeroic = false;
        this.isLegendary = false;
        this.battleHonours = {};
        this.battleScars = {};
    }
}
