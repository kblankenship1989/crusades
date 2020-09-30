import {Factions, factions} from '../consts';

export type Player = {
    firstName: string,
    lastName: string,
    middleName?: string,
    preferredFaction: Factions
};

export const defaultPlayer : Player = {
    firstName: '',
    lastName: '',
    preferredFaction: factions[0]
};
