import {Factions} from '../../enums';

export class Player {
    public firstName: string;
    public lastName: string;
    public middleName?: string;
    public preferredFaction: Factions;
    public avatarImageUri?: string;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.preferredFaction = Factions.UNALIGNED;
    }

    getPlayerName = () : string => {
        let name = this.firstName;

        if (this.middleName) {
            name += ` ${this.middleName}`;
        }

        name += ` ${this.lastName}`;

        return name;
    };
}
