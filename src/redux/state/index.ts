import {PlayerAccount} from './player-account';

export type State = {
    accounts: Record<string, PlayerAccount>,
    selectedAccountId: string | null,
    selectedOrderOfBattleId: string | null,
    selectedCrusadeCardId: string | null
};

export const defaultState : State = {
    accounts: {},
    selectedAccountId: null,
    selectedOrderOfBattleId: null,
    selectedCrusadeCardId: null
};
