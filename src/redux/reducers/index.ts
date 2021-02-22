import {combineReducers} from 'redux';
import {Reducer} from 'redux';

import {selectedOrderOfBattle} from './selected-order-of-battle';
import {selectedCrusadeCard} from './selected-crusade-card';
import {selectedAccountId} from './selected-account-id';
import {accounts} from './accounts';

export const rootReducer : Reducer<State, AvailableActions> = combineReducers({
    accounts,
    selectedAccountId,
    selectedCrusadeCard,
    selectedOrderOfBattle
});
