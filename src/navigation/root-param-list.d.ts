import {BattleResults} from '../redux/state/order-of-battle/battle-results';

export type RootParamList = {
    Home: undefined;
    OrderOfBattleSummary: {
        updatedBattleResults: BattleResults[]
    };
    CrusadeCardSummary: undefined;
    BattleSummary: {
        battleResults: BattleResults[]
    };
};
