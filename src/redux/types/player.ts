import {Faction} from "../../types/literals";

export type Player = {
    firstName: string,
    lastName: string,
    middleName?: string,
    preferredFaction: Faction
};

export const defaultPlayer : Player = {
    firstName: '',
    lastName: '',
    preferredFaction: 'Unaligned'
};
