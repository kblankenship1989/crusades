// import {CrusadeCard} from './crusade-card';
import {RequisitionPoints} from '../literals';
import {Factions, factions, BattleOutcomes} from '../consts';
import {CrusadeCard} from './crusade-card';

export type OrderOfBattle = {
    title: string,
    faction: Factions,
    requisitionPoints: RequisitionPoints,
    battleTally: BattleOutcomes[],
    supplyLimit: number,
    crusadeCards: CrusadeCard[],
    // goals?: string,
    // notableVictories?: string[]
};

export const defaultOrderOfBattle : OrderOfBattle = {
    title: '',
    faction: factions[0],
    requisitionPoints: 5,
    battleTally: [],
    supplyLimit: 50,
    crusadeCards: []
};
