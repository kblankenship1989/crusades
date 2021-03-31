import {connect} from 'react-redux';
import {BattleResultDetails} from './battle-result-details';
import {State} from '../../redux/state';
import {loadSelectedBattleResult, deleteBattleResult} from '../../redux/action-creators/battle-results';
import {loadSelectedCrusadeCard} from '../../redux/action-creators/crusade-cards';

const mapStateToProps = (state: State) => {
    const {
        selectedOrderOfBattleId,
        selectedBattleResultId,
        account
    } = state;

    const {
        battleResults,
        crusadeCards
    } = account.ordersOfBattle[selectedOrderOfBattleId as string];
    return {
        battleResult: battleResults[selectedBattleResultId as string],
        crusadeCards,
        selectedBattleResultId: selectedBattleResultId as string
    };
};

const mapDispatchToProps = {
    loadSelectedBattleResult,
    deleteBattleResult,
    loadSelectedCrusadeCard
};

export const battleResultDetailsConnector = connect(mapStateToProps, mapDispatchToProps);
export const BattleResultDetailsConnector = battleResultDetailsConnector(BattleResultDetails);
