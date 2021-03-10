export enum BattleOutcomes {
    TABLED = 'Tabled',
    MAJOR_LOSS = 'Major Loss',
    MINOR_LOSS = 'Minor Loss',
    DRAW = 'Draw',
    MINOR_VICTORY = 'Minor Victory',
    MAJOR_VICTORY = 'Major Victory',
    ANNIHALATION = 'Annihalation'
}

export enum BattleOutcomesSummary {
    WIN = 'WIN',
    LOSE = 'LOSE',
    DRAW = 'DRAW'
}

export const battleOutcomesSummaryMap : Record<BattleOutcomes, BattleOutcomesSummary> = {
    [BattleOutcomes.TABLED]: BattleOutcomesSummary.LOSE,
    [BattleOutcomes.MAJOR_LOSS]: BattleOutcomesSummary.LOSE,
    [BattleOutcomes.MINOR_LOSS]: BattleOutcomesSummary.LOSE,
    [BattleOutcomes.DRAW]: BattleOutcomesSummary.DRAW,
    [BattleOutcomes.MINOR_VICTORY]: BattleOutcomesSummary.WIN,
    [BattleOutcomes.MAJOR_VICTORY]: BattleOutcomesSummary.WIN,
    [BattleOutcomes.ANNIHALATION]: BattleOutcomesSummary.WIN
};
