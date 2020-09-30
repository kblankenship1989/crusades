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
    onValueChange: (itemValue: string | number, itemIndex: number) => void
}

export type OrderOfBattleListItemProps = {
    selectOrderOfBattle: (index: number) => void
}
