import {PlayerAccount} from './player-account';

export class State {
    account: PlayerAccount;
    selectedOrderOfBattleId: string | null;
    selectedCrusadeCardId: string | null;
    selectedBattleResultId: string | null;
    isBattleInProgress: boolean;

    constructor() {
        this.account = new PlayerAccount();
        this.selectedCrusadeCardId = null;
        this.selectedOrderOfBattleId = null;
        this.selectedBattleResultId = null;
        this.isBattleInProgress = false;
    }
}
