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
    enemyUnitsDestroyedWithMelee: 0,
    enemyUnitsDestroyedWithPsychic: 0,
    enemyUnitsDestroyedWithRanged: 0
};

export const defaultObjectiveTalliesWithAgendas : ObjectiveTallies = {
    ...defaultObjectiveTallies,
    agenda1: 0,
    agenda2: 0,
    agenda3: 0
};
