import {OrderOfBattle} from '../state/order-of-battle';
import {Factions} from '../consts';
import {CrusadeCard} from '../state/crusade-card';

export type OrderOfBattleSummaryState = OrderOfBattle & {
    isDirty: boolean
}

export type HomeState = {
    title: string,
    faction: Factions
}

export type CrusadeCardSummaryState = CrusadeCard & {
    isDirty: boolean,
    isEditing: boolean
}
