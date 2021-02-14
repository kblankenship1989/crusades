import {BattleOutcomes, Factions} from '../consts';

export type BattleSummaryProps = {
    battleTallies: BattleOutcomes[],
    addBattleTally: (battleOutcome : BattleOutcomes) => void
}

export type CrusadeCardListItemProps = {
    selectCrusadeCard: (index: number) => void
}

export type FactionPickerProps = {
    selectedFaction: Factions,
    onChange: (faction: Factions) => void
}

export type OrderOfBattleListItemProps = {
    deleteSelectedOrderOfBattle: (index: number) => void,
    selectOrderOfBattle: (index: number) => void
}

export type ActionFooterProps = {
    onAdd?: () => void,
    onSave?: () => void
}

export type RequisitionPointsSelectorProps = {
    currentPoints: number
    onChange: (points : number) => void
}
