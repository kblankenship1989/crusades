import {v1} from 'react-native-uuid';

import {BattlefieldRoles, Factions} from '../../../enums';
import {CombatTallies} from './crusade-card/combat-tallies';

export class CrusadeCard {
    id: string;
    name?: string;
    unit: string;
    faction: Factions;
    battlefieldRole: BattlefieldRoles;
    selected: boolean;
    powerRating: number;
    combatTallies: CombatTallies;
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
    // rank?: Rank;

    constructor(preferredFaction: Factions) {
        this.id = v1();
        this.unit = '';
        this.powerRating = 1;
        this.selected = true;
        this.faction = preferredFaction;
        this.battlefieldRole = BattlefieldRoles.TROOPS;
        this.combatTallies = new CombatTallies();
        // this.experiencePoints = 0;
        // this.crusadePoints = 0;
        // this.selectableKeywords = [];
        // this.unitType = [];
        // this.equipment = [];
        // this.rules = [];
    }

    getDisplayName = ():string => this.name || this.unit;
}
