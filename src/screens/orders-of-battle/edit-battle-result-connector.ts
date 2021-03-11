import {connect} from 'react-redux';
import {EditBattleResult} from './edit-battle-result';
import {State} from '../../redux/state';
import {saveBattleResult} from '../../redux/action-creators/battle-results';

const mapStateToProps = (state: State) => {
    const {
        selectedAccountId,
        selectedOrderOfBattleId,
        selectedBattleResultId,
        accounts
    } = state;

    const {
        battleResults,
        crusadeCards
    } = accounts[selectedAccountId as string].ordersOfBattle[selectedOrderOfBattleId as string];
    return {
        battleResult: battleResults[selectedBattleResultId as string],
        crusadeCards,
        selectedBattleResultId: selectedBattleResultId as string
    };
};

const mapDispatchToProps = {
    saveBattleResult
};

export const editBattleResultConnector = connect(mapStateToProps, mapDispatchToProps);
export const EditBattleResultConnector = editBattleResultConnector(EditBattleResult);
