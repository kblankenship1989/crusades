import {Factions} from '../../../../enums';

export class Opponent {
    name?: string;
    faction: Factions;
    powerRating: number;
    victoryPoints: number

    constructor() {
        this.faction = Factions.UNALIGNED;
        this.powerRating = 0;
        this.victoryPoints = 0;
    }
}
