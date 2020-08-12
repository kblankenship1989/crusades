export const  factions = [
    'Unaligned',
    'Imperium',
    'Chaos',
    'Aeldari',
    'Tyranids',
    'Orks',
    'Necrons',
    'T\'au Empire'
] as const;

export type Factions = typeof factions[number];

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
    SELECT_ROLE = 'Select Battlefield Role'
}

export enum UnitTypes {
    CHARACTER = 'Character',
    MONSTER = 'Monster',
    VEHICLE = 'Vehicle',
    PSYKER = 'Psyker',
    OTHER = 'Other',
    SWARM = 'Swarm',
    DRONE = 'Drone',
    NAMED_CHARACTER = 'Named Character'
}

