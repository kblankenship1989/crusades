import {PlayerAccount} from './player-account';

export class State {
    public accounts: Record<string, PlayerAccount>;
    public selectedAccountId: string | null;
    public selectedOrderOfBattleId: string | null;
    public selectedCrusadeCardId: string | null;

    constructor() {
        this.accounts = {};
        this.selectedAccountId = null;
        this.selectedCrusadeCardId = null;
        this.selectedOrderOfBattleId = null;
    }
}
