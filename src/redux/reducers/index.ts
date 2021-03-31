import {combineReducers, AnyAction, Reducer} from 'redux';

import {selectedOrderOfBattleId} from './selected-order-of-battle-id';
import {selectedCrusadeCardId} from './selected-crusade-card-id';
import {account} from './account';
import {State} from '../state';
import {selectedBattleResultId} from './selected-battle-result-id';
import {isBattleInProgress} from './is-battle-in-progress';

export const rootReducer : Reducer<State, AnyAction> = combineReducers({
    account,
    selectedCrusadeCardId,
    selectedOrderOfBattleId,
    selectedBattleResultId,
    isBattleInProgress
});
