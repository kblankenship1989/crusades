import {OrderOfBattle} from '../state/order-of-battle';
import {CrusadeCard} from '../state/crusade-card';

export type OrderOfBattleSummaryState = OrderOfBattle & {
    isDirty: boolean
}

export type CrusadeCardSummaryState = CrusadeCard & {
    isDirty: boolean,
    isEditing: boolean
}
