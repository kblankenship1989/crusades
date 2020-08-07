export type ObjectiveTallies = {
    enemyUnitsDestroyed: number,
    enemyUnitsDestroyedWithPsychic: number,
    enemyUnitsDestroyedWithRanged: number,
    enemyUnitsDestroyedWithMelee: number,
    agenda1?: number,
    agenda2?: number,
    agenda3?: number
};

export const defaultObjectiveTallies : ObjectiveTallies = {
    enemyUnitsDestroyed: 0,
    enemyUnitsDestroyedWithPsychic:0,
    enemyUnitsDestroyedWithRanged: 0,
    enemyUnitsDestroyedWithMelee: 0

};
