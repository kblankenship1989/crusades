export enum  Factions {
    UNALIGNED = 'Unaligned',
    IMPERIUM = 'Imperium',
    CHAOS = 'Chaos',
    AELDARI = 'Aeldari',
    TYRANIDS = 'Tyranids',
    ORKS = 'Orks',
    NECRONS = 'Necrons',
    TAU = 'T\'au Empire'
}

export enum BattlefieldRoles {
    HQ = 'HQ',
    TROOPS = 'Troops',
    ELITES = 'Elites',
    HEAVY_SUPPORT = 'Heavy Support',
    FLYER = 'Flyer',
    DEDICATED_TRANSPORT = 'Dedicated Transport',
    FAST_ATTACK = 'Fast Attack',
    FORTIFICATION = 'Fortification',
    LORD_OF_WAR = 'Lord Of War',
    SELECT = 'Select Battlefield Role'
}

export enum UnitTypes {
    CHARACTER = 'Character',
    MONSTER = 'Monster',
    VEHICLE = 'Vehicle',
    PSYKER = 'Psyker',
    OTHER = 'Other',
    SWARN = 'Swarm',
    DRONE = 'Drone',
    NAMED_CHARACTER = 'Named Character'
}

export enum BattleOutcomes {
    TABLED = 'Tabled',
    MAJOR_LOSS = 'Major Loss',
    MINOR_LOSS = 'Minor Loss',
    DRAW = 'Draw',
    MINOR_VICTORY = 'Minor Victory',
    MAJOR_VICTORY = 'Major Victory',
    ANNIHALATION = 'Annihalation'
}

export enum ActionList {
    UPDATE_PLAYER  = 'UPDATE_PLAYER',
    SET_ORDERS_OF_BATTLE = 'SET_ORDERS_OF_BATTLE',
    SET_CURRENT_CRUSADE_CARD_INDEX = 'SET_CURRENT_CRUSADE_CARD_INDEX'
}

export enum BattleHonours {
    SOME_HONOR = 'SOME_HONOR'
}

export enum BattleScars {
    SOME_SCAR = 'SOME_SCAR'
}
