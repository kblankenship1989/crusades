import {CombatTallies, defaultCombatTallies} from './combat-tallies';
import {Rank} from './rank';
import {Factions, BattlefieldRoles, UnitTypes, factions} from '../../types/consts';

export type CrusadeCard = {
    name?: string,
    unit: string,
    faction: Factions,
    battleFieldRole: BattlefieldRoles,
    powerRating: number,
    experiencePoints: number,
    crusadePoints: number,
    selectableKeywords: string[],
    unitType: UnitTypes[],
    equipment: string[],
    psychicPowers?: string[],
    warlordTraits?: string[],
    relics?: string[],
    upgrades?: string[],
    rules: string[],
    combatTallies: CombatTallies,
    rank?: Rank
};

export const defaultCrusadeCard : CrusadeCard = {
    name: '',
    unit: '',
    faction: factions[0],
    battleFieldRole: BattlefieldRoles.SELECT_ROLE,
    powerRating: 0,
    experiencePoints: 0,
    crusadePoints: 0,
    selectableKeywords: [],
    unitType: [],
    equipment: [],
    rules: [],
    combatTallies: defaultCombatTallies
};
