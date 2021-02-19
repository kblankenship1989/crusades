import {Factions} from '../../types/enums';

export const defaultOrderOfBattle = () : OrderOfBattle => ({
    id: new Date().getTime(),
    faction: Factions.UNALIGNED,
    requisitionPoints: 5,
    battleTally: [],
    supplyLimit: 50,
    crusadeCards: []
});
