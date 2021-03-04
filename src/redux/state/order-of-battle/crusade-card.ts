import {v1} from 'react-native-uuid';

import {BattlefieldRoles, Factions} from '../../../enums';

export type CrusadeCard = {
    id: string,
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

export const getDefaultCrusadeCard = () : CrusadeCard => ({
    id: v1(),
    unit: '',
    powerRating: 0,
    faction: Factions.UNALIGNED,
    battleFieldRole: BattlefieldRoles.TROOPS// ,
    // experiencePoints: 0,
    // crusadePoints: 0,
    // selectableKeywords: [],
    // unitType: [],
    // equipment: [],
    // rules: [],
    // combatTallies: defaultCombatTallies
});
