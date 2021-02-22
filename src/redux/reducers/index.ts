import {combineReducers, AnyAction} from 'redux';
import {Reducer} from 'redux';

import {selectedOrderOfBattleId} from './selected-order-of-battle-id';
import {selectedCrusadeCardId} from './selected-crusade-card-id';
import {selectedAccountId} from './selected-account-id';
import {accounts} from './accounts';
import {State} from '../state';

export const rootReducer : Reducer<State, AnyAction> = combineReducers({
    accounts,
    selectedAccountId,
    selectedCrusadeCardId,
    selectedOrderOfBattleId
});
