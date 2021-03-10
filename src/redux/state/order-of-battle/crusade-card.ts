import {v1} from 'react-native-uuid';

import {BattlefieldRoles, Factions} from '../../../enums';

export class CrusadeCard {
    public id: string;
    public name?: string;
    public unit: string;
    public faction: Factions;
    public battleFieldRole: BattlefieldRoles;
    public selected: boolean;
    public powerRating: number;
    // public experiencePoints: number;
    // public crusadePoints: number;
    // public selectableKeywords: string[];
    // public unitType: UnitTypes[];
    // public equipment: string[];
    // public psychicPowers?: string[];
    // public warlordTraits?: string[];
    // public relics?: string[];
    // public upgrades?: string[];
    // public rules: string[];
    // public combatTallies: CombatTallies;
    // public rank?: Rank;

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
}
