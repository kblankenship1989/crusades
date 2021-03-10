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

    return {
        battleResult: accounts[selectedAccountId as string].ordersOfBattle[selectedOrderOfBattleId as string].battleResults[selectedBattleResultId as string],
        selectedBattleResultId: selectedBattleResultId as string
    };
};

const mapDispatchToProps = {
    saveBattleResult
};

export const editBattleResultConnector = connect(mapStateToProps, mapDispatchToProps);
export const EditBattleResultConnector = editBattleResultConnector(EditBattleResult);
