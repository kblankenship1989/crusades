import {BattleOutcomes, Factions} from '../consts';
import {CrusadeCard} from '../state/crusade-card';
import {OrderOfBattle} from '../state/order-of-battle';

export type BattleSummaryProps = {
    battleTallies: BattleOutcomes[],
    addBattleTally: (battleOutcome : BattleOutcomes) => void
}

export type CrusadeCardListItemProps = {
    selectCrusadeCard: (index: number) => void,
    deleteCrusadeCard: (index: number) => void,
    updateSelected: (index: number, isSelected: boolean) => void,
    crusadeCard: CrusadeCard,
    index: number
}

export type FactionPickerProps = {
    selectedFaction: Factions,
    onChange: (faction: Factions) => void
}

export type OrderOfBattleListItemProps = {
    deleteSelectedOrderOfBattle: (index: number) => void,
    selectOrderOfBattle: (index: number) => void,
    index: number,
    orderOfBattle: OrderOfBattle
}

export type ActionFooterProps = {
    onAdd?: () => void,
    onSave?: () => void
}

export type RequisitionPointsSelectorProps = {
    currentPoints: number
    onChange: (points : number) => void
}

export type FactionImageContainerProps = {
    faction: Factions
}
