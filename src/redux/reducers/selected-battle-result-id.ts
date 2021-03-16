import {AvailableActions} from '../action-list';
import {AnyAction} from 'redux';
import {CreateBattleResultAction, SelectBattleResultAction} from '../action-creators/battle-results';

type SelectedBattleResultsIdActions = CreateBattleResultAction | SelectBattleResultAction | AnyAction

export const selectedBattleResultId = (state: string | null = null, action : SelectedBattleResultsIdActions) : string | null => {
    return action.type === AvailableActions.SELECT_BATTLE_RESULT
        || action.type === AvailableActions.CREATE_BATTLE_RESULT ?
        action.payload.selectedBattleResultsId :
        state;
};
