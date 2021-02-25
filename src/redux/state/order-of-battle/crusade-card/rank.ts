import {BattleHonours, BattleScars} from '../../../../enums';

export type Rank = {
    isBlooded: boolean,
    isBattleHardened: boolean,
    isHeroic: boolean,
    isLegendary: boolean,
    battleHonours: Record<string, BattleHonours>,
    battleScars: Record<string, BattleScars>
};

export const defaultRank : Rank = {
    isBlooded: false,
    isBattleHardened: false,
    isHeroic: false,
    isLegendary: false,
    battleHonours: {},
    battleScars: {}
};
