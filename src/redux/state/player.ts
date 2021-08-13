import {Factions} from '../../enums';

export class Player {
    firstName: string;
    lastName: string;
    middleName?: string;
    preferredFaction: Factions | undefined;
    avatarImageUri?: string;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.preferredFaction = undefined;
    }

    getPlayerName() : string {
        let name = this.firstName;

        if (this.middleName) {
            name += ` ${this.middleName}`;
        }

        name += ` ${this.lastName}`;

        return name;
    }
}
