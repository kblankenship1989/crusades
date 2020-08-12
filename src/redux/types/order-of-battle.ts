// import {CrusadeCard} from './crusade-card';
import {RequisitionPoints} from '../../types/literals';
import {Factions, factions} from '../../types/consts';

export type OrderOfBattle = {
    title: string,
    faction: Factions,
    requisitionPoints: RequisitionPoints,
    // battleTally: number,
    // battlesWon: number,
    // supplyLimit: number,
    // supplyUsed: number,
    // crusadeCards: CrusadeCard[],
    // goals?: string,
    // notableVictories?: string[]
};

export const defaultOrderOfBattle : OrderOfBattle = {
    title: '',
    faction: factions[0],
    requisitionPoints: 5,
    // battleTally: 0,
    // battlesWon: 0,
    // supplyLimit: 50,
    // supplyUsed: 0,
    // crusadeCards: []
};
