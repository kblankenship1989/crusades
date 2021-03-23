import {
    CreateBattleResultAction,
    DeleteBattleResultAction,
    UpdateBattleResultAction
} from '../action-creators/battle-results';
import {AvailableActions, BattleResultActions} from '../action-list';
import {BattleResults} from '../state/order-of-battle/battle-results';

export type BattleResultActionList = DeleteBattleResultAction |
    CreateBattleResultAction |
    UpdateBattleResultAction

type BattleResultHelper = (battleResults: Record<string, BattleResults>, action: BattleResultActionList) => Record<string, BattleResults>

const deleteBattleResult : BattleResultHelper = (crusadeCards, action) => {
    const newBattleResults = {...crusadeCards};

    delete newBattleResults[(action as DeleteBattleResultAction).payload.battleResultId];

    return newBattleResults;
};

const addBattleResult : BattleResultHelper = (battleResults, action) => {
    const {
        selectedBattleResultId,
        newBattleResult
    } = (action as CreateBattleResultAction).payload;
    return {
        ...battleResults,
        [selectedBattleResultId]: newBattleResult
    };
};


const updateBattleResult : BattleResultHelper = (battleResults, action) => {
    const {
        selectedBattleResultId,
        updates
    } = (action as UpdateBattleResultAction).payload;
    const newBattleResult = {
        ...battleResults[selectedBattleResultId],
        ...updates
    };

    return {
        ...battleResults,
        [selectedBattleResultId]: newBattleResult
    };
};

const selectBattleResult : BattleResultHelper = (battleResults) => battleResults;

export const battleResultHelpers : BattleResultHelper = (battleResults, action) => {
    const actionMap : Record<BattleResultActions, BattleResultHelper> = {
        [AvailableActions.CREATE_BATTLE_RESULT]: addBattleResult,
        [AvailableActions.DELETE_BATTLE_RESULT]: deleteBattleResult,
        [AvailableActions.UPDATE_BATTLE_RESULT]: updateBattleResult,
        [AvailableActions.SELECT_BATTLE_RESULT]: selectBattleResult
    };

    return actionMap[action.type as BattleResultActions] ?
        actionMap[action.type as BattleResultActions](battleResults, action) :
        battleResults;
};
