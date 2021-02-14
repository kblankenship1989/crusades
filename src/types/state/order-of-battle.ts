// import {CrusadeCard} from './crusade-card';
import {RequisitionPoints} from '../literals';
import {Factions, factions, BattleOutcomes} from '../consts';
import {CrusadeCard} from './crusade-card';

export type OrderOfBattle = {
    id: number,
    title?: string,
    faction: Factions,
    requisitionPoints: RequisitionPoints,
    battleTally: BattleOutcomes[],
    supplyLimit: number,
    crusadeCards: CrusadeCard[],
    // goals?: string,
    // notableVictories?: string[]
};

export const defaultOrderOfBattle = () : OrderOfBattle => ({
    id: new Date().getTime(),
    faction: factions[0],
    requisitionPoints: 5,
    battleTally: [],
    supplyLimit: 50,
    crusadeCards: []
});
