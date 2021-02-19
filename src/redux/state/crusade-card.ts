import {BattlefieldRoles, Factions} from '../../types/enums';

export const defaultCrusadeCard : CrusadeCard = {
    unit: '',
    faction: Factions.UNALIGNED,
    battleFieldRole: BattlefieldRoles.SELECT,
    powerRating: 0// ,
    // experiencePoints: 0,
    // crusadePoints: 0,
    // selectableKeywords: [],
    // unitType: [],
    // equipment: [],
    // rules: [],
    // combatTallies: defaultCombatTallies
};
