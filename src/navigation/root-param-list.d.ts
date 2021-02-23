import {BattleResults} from '../redux/state/order-of-battle/battle-results';

export type RootParamList = {
    Home: undefined;
    OrderOfBattleSummary: {
        updatedBattleResults: BattleResults[]
    } | undefined;
    CrusadeCardSummary: undefined;
    BattleSummary: {
        battleResults: BattleResults[]
    };
    Login: undefined;
    AddAccount: undefined;
};
