declare type Rank = {
    isBlooded: boolean,
    isBattleHardened: boolean,
    isHeroic: boolean,
    isLegendary: boolean,
    battleHonours: string[],
    battleScars: string[]
}

declare type Player = {
    firstName: string,
    lastName: string,
    middleName?: string,
    preferredFaction: Factions
};

declare type OrderOfBattle = {
    id: number,
    title?: string,
    faction: Factions,
    requisitionPoints: number,
    battleTally: BattleOutcomes[],
    supplyLimit: number,
    crusadeCards: CrusadeCard[],
    // goals?: string,
    // notableVictories?: string[]
}

declare type ObjectiveTallies = {
    enemyUnitsDestroyed: number,
    enemyUnitsDestroyedWithPsychic: number,
    enemyUnitsDestroyedWithRanged: number,
    enemyUnitsDestroyedWithMelee: number,
    agenda1?: number,
    agenda2?: number,
    agenda3?: number
}

declare type CombatTallies = {
    battlesPlayed: number,
    battlesSurvived: number,
    currentBattleTally: ObjectiveTallies,
    totalTally: ObjectiveTallies
}


declare type CrusadeCard = {
    name?: string,
    unit: string,
    faction: Factions,
    battleFieldRole: BattlefieldRoles,
    powerRating: number// ,
    // experiencePoints: number,
    // crusadePoints: number,
    // selectableKeywords: string[],
    // unitType: UnitTypes[],
    // equipment: string[],
    // psychicPowers?: string[],
    // warlordTraits?: string[],
    // relics?: string[],
    // upgrades?: string[],
    // rules: string[],
    // combatTallies: CombatTallies,
    // rank?: Rank
}

declare type State = {
    player: Player,
    ordersOfBattle: OrderOfBattle[],
    currentCrusadeCardIndex: number
}
