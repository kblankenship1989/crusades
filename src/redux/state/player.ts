import {ImageSourcePropType} from 'react-native';
import {Factions} from '../../enums';

export type Player = {
    firstName: string,
    lastName: string,
    middleName?: string,
    preferredFaction: Factions,
    avatarImage?: ImageSourcePropType
};

export const defaultPlayer : Player = {
    firstName: '',
    lastName: '',
    preferredFaction: Factions.UNALIGNED
};

export const getPlayerName = (player : Player) : string => {
    let name = player.firstName;

    if (player.middleName) {
        name += ` ${player.middleName}`;
    }

    name += ` ${player.lastName}`;

    return name;
};
