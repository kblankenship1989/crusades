import {CombatTallies} from './combat-tallies';
import {NameMessagePair} from "./name-message-pair";
import {Rank} from './rank';
import {Faction} from '../../types/literals';

export type CrusadeCard = {
    name: string,
    unit: string,
    faction: Faction,
    battleFieldRole: 'HQ' | 'Troops' | 'Elites' | 'Heavy Support' | 'Flyer' | 'Dedicated Transport' | 'Fast Attack' | 'Fortification' | 'Lord Of War' | 'Select Role',
    powerRating: number,
    experiencePoints: number,
    crusadePoints: number,
    selectableKeywords: string[],
    unitType: 'Character' | 'Monster' | 'Vehicle' | 'Psyker' | 'Other' | 'Select Type',
    equipment: string[],
    psychicPowers?: string[],
    warlordTraits?: string[],
    relics?: string[],
    upgrads?: NameMessagePair[],
    rules: NameMessagePair[],
    combatTallies: CombatTallies,
    rank: Rank
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
    unitType: 'Select Type',
    equipment: [],
    rules: [],
    combatTallies: CombatTallies,
    rank: Rank
};
