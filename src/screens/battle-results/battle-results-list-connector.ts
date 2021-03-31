import {connect} from 'react-redux';
import {State} from '../../redux/state';
import {BattleResultsList} from './battle-results-list';
import {loadSelectedBattleResult, deleteBattleResult, createBattleResult} from '../../redux/action-creators/battle-results';

const mapStateToProps = (state: State) => {
    const {
        selectedOrderOfBattleId,
        account
    } = state;

    return {
        battleResults: account.ordersOfBattle[selectedOrderOfBattleId as string].battleResults
    };
};

const mapDispatchToProps = {
    createBattleResult,
    loadSelectedBattleResult,
    deleteBattleResult
};

export const battleResultsListConnector = connect(mapStateToProps, mapDispatchToProps);
export const BattleResultsListConnector = battleResultsListConnector(BattleResultsList);
