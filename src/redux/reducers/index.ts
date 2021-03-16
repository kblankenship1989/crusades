import {combineReducers, AnyAction, Reducer} from 'redux';

import {selectedOrderOfBattleId} from './selected-order-of-battle-id';
import {selectedCrusadeCardId} from './selected-crusade-card-id';
import {selectedAccountId} from './selected-account-id';
import {accounts} from './accounts';
import {State} from '../state';
import {selectedBattleResultId} from './selected-battle-result-id';
import {isBattleInProgress} from './is-battle-in-progress';

export const rootReducer : Reducer<State, AnyAction> = combineReducers({
    accounts,
    selectedAccountId,
    selectedCrusadeCardId,
    selectedOrderOfBattleId,
    selectedBattleResultId,
    isBattleInProgress
});
