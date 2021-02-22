import {Factions} from '../../enums';

export type Player = {
    firstName: string,
    lastName: string,
    middleName?: string,
    preferredFaction: Factions
};

export const defaultPlayer : Player = {
    firstName: '',
    lastName: '',
    preferredFaction: Factions.UNALIGNED
};
