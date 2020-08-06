import {CombatTallies, defaultCombatTallies} from './combat-tallies';
import {NameMessagePair} from "./name-message-pair";
import {Rank} from './rank';
import {Faction, BattlefieldRoles, UnitType} from '../../types/literals';

export type CrusadeCard = {
    name?: string,
    unit: string,
    faction: Faction,
    battleFieldRole: BattlefieldRoles,
    powerRating: number,
    experiencePoints: number,
    crusadePoints: number,
    selectableKeywords: string[],
    unitType: UnitType[],
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
    faction: 'Unaligned',
    battleFieldRole: 'Select Role',
    powerRating: 0,
    experiencePoints: 0,
    crusadePoints: 0,
    selectableKeywords: [],
    unitType: [],
    equipment: [],
    rules: [],
    combatTallies: defaultCombatTallies
};
