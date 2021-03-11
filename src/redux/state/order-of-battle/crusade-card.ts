import {v1} from 'react-native-uuid';

import {BattlefieldRoles, Factions} from '../../../enums';

export class CrusadeCard {
    id: string;
    name?: string;
    unit: string;
    faction: Factions;
    battleFieldRole: BattlefieldRoles;
    selected: boolean;
    powerRating: number;
    // experiencePoints: number;
    // crusadePoints: number;
    // selectableKeywords: string[];
    // unitType: UnitTypes[];
    // equipment: string[];
    // psychicPowers?: string[];
    // warlordTraits?: string[];
    // relics?: string[];
    // upgrades?: string[];
    // rules: string[];
    // combatTallies: CombatTallies;
    // rank?: Rank;

    constructor(preferredFaction: Factions) {
        this.id = v1();
        this.unit = '';
        this.powerRating = 0;
        this.selected = true;
        this.faction = preferredFaction;
        this.battleFieldRole = BattlefieldRoles.TROOPS;
        // this.experiencePoints = 0;
        // this.crusadePoints = 0;
        // this.selectableKeywords = [];
        // this.unitType = [];
        // this.equipment = [];
        // this.rules = [];
        // this.combatTallies =defaultCombatTallies;
    }

    getDisplayName = ():string => this.name || this.unit;
}
