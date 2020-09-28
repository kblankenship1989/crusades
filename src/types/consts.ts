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

export const battlefieldRoles = [
    'HQ',
    'Troops',
    'Elites',
    'Heavy Support',
    'Flyer',
    'Dedicated Transport',
    'Fast Attack',
    'Fortification',
    'Lord Of War',
    'Select Battlefield Role'
] as const;

export type BattlefieldRoles = typeof battlefieldRoles[number];

export const unitTypes = [
    'Character',
    'Monster',
    'Vehicle',
    'Psyker',
    'Other',
    'Swarm',
    'Drone',
    'Named Character'
] as const;

export type UnitTypes = typeof unitTypes[number];

export const battleOutcomes = [
    'Tabled',
    'Major Loss',
    'Minor Loss',
    'Draw',
    'Minor Victory',
    'Major Victory',
    'Annihalation'
] as const;

export type BattleOutcomes = typeof battleOutcomes[number];
