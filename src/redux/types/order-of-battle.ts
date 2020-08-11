// import {CrusadeCard} from './crusade-card';
import {Faction, RequisitionPoints} from '../../types/literals';

export type OrderOfBattle = {
    title: string,
    faction: Faction,
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
    faction: 'Unaligned',
    requisitionPoints: 5,
    // battleTally: 0,
    // battlesWon: 0,
    // supplyLimit: 50,
    // supplyUsed: 0,
    // crusadeCards: []
};
