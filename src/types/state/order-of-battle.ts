// import {CrusadeCard} from './crusade-card';
import {RequisitionPoints} from '../literals';
import {Factions, factions, BattleOutcomes} from '../consts';
import {CrusadeCard} from './crusade-card';
import {v1} from 'react-native-uuid';

export type OrderOfBattle = {
    id: string,
    title: string,
    faction: Factions,
    requisitionPoints: RequisitionPoints,
    battleTally: BattleOutcomes[],
    supplyLimit: number,
    crusadeCards: CrusadeCard[],
    // goals?: string,
    // notableVictories?: string[]
};

export const defaultOrderOfBattle = () : OrderOfBattle => ({
    id: v1(),
    title: 'Untitled',
    faction: factions[0],
    requisitionPoints: 5,
    battleTally: [],
    supplyLimit: 50,
    crusadeCards: []
});
