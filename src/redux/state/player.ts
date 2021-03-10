import {Factions} from '../../enums';

class Player {
    _firstName: string;
    _lastName: string;
    _middleName?: string;
    _preferredFaction: Factions;
    _avatarImageUri?: string;

    constructor() {
        this._firstName = '';
        this._lastName = '';
        this._preferredFaction = Factions.UNALIGNED;
    }

    get preferredFaction(): Factions {
        return this._preferredFaction;
    }

    set preferredFaction(preferredFaction: Factions) {
        this._preferredFaction = preferredFaction;
    }

    get playerName() : string {
        let name = this._firstName;

        if (this._middleName) {
            name += ` ${this._middleName}`;
        }

        name += ` ${this._lastName}`;

        return name;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    get middleName(): string | undefined {
        return this._middleName;
    }

    set middleName(middleName: string | undefined) {
        this._middleName = middleName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    get avatarImageUri(): string | undefined {
        return this._avatarImageUri;
    }

    set avatarImageUri(avatarImageUri: string | undefined) {
        this._avatarImageUri = avatarImageUri;
    }
}

export default Player;
