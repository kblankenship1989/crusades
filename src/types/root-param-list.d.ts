declare type RootParamList = {
    Home: undefined;
    OrderOfBattleSummary: {
        updatedBattleResults: BattleResults[]
    } | undefined;
    CrusadeCardSummary: undefined;
    BattleSummary: {
        battleResults: BattleResults[]
    };
};
