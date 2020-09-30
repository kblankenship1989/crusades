// import {CombatTallies, defaultCombatTallies} from './combat-tallies';
// import {Rank} from './rank';
import {Factions, BattlefieldRoles, UnitTypes, factions, battlefieldRoles} from '../consts';

export type CrusadeCard = {
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
};

export const defaultCrusadeCard : CrusadeCard = {
    name: '',
    unit: '',
    faction: factions[0],
    battleFieldRole: battlefieldRoles[9],
    powerRating: 0// ,
    // experiencePoints: 0,
    // crusadePoints: 0,
    // selectableKeywords: [],
    // unitType: [],
    // equipment: [],
    // rules: [],
    // combatTallies: defaultCombatTallies
};

export type CurrentCrusadeCard = CrusadeCard & {
    index: number
};

export const defaultCurrentCrusadeCard : CurrentCrusadeCard = {
    ...defaultCrusadeCard,
    index: -1
};
