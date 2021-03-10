import {PlayerAccount} from './player-account';

export class State {
    accounts: Record<string, PlayerAccount>;
    selectedAccountId: string | null;
    selectedOrderOfBattleId: string | null;
    selectedCrusadeCardId: string | null;
    selectedBattleResultId: string | null;

    constructor() {
        this.accounts = {};
        this.selectedAccountId = null;
        this.selectedCrusadeCardId = null;
        this.selectedOrderOfBattleId = null;
        this.selectedBattleResultId = null;
    }
}
