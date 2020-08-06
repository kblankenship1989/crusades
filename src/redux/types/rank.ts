export type Rank = {
    isBlooded: boolean,
    isBattleHardened: boolean,
    isHeroic: boolean,
    isLegendary: boolean,
    battleHonours: string[],
    battleScars: string[]
};

export const defaultRank = {
    isBlooded: false,
    isBattleHardened: false,
    isHeroic: false,
    isLegendary: false,
    battleHonours: [],
    battleScars: []
};
