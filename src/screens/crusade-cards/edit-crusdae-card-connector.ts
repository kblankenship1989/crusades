import {connect} from 'react-redux';
import {EditCrusadeCard} from './edit-crusade-card';
import {State} from '../../redux/state';
import {saveCrusadeCard} from '../../redux/action-creators/crusade-cards';

const mapStateToProps = (state: State) => {
    const {
        selectedAccountId,
        selectedOrderOfBattleId,
        selectedCrusadeCardId,
        accounts
    } = state;

    return {
        crusadeCard: accounts[selectedAccountId as string].ordersOfBattle[selectedOrderOfBattleId as string].crusadeCards[selectedCrusadeCardId as string],
        selectedCrusadeCardId: selectedCrusadeCardId as string
    };
};

const mapDispatchToProps = {
    saveCrusadeCard
};

export const editCrusadeCardConnector = connect(mapStateToProps, mapDispatchToProps);
export const EditCrusadeCardConnector = editCrusadeCardConnector(EditCrusadeCard);
