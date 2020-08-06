export type Player = {
    firstName: string,
    lastName: string,
    middleName?: string,
    preferredFaction?: string
};

export const defaultPlayer : Player = {
    firstName: '',
    lastName: ''
};
