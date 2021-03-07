import {connect} from 'react-redux';
import {CrusadeCardSummary} from './crusade-card-summary';
import {State} from '../../redux/state';

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


export const crusadeCardSummaryConnector = connect(mapStateToProps);
export const CrusadeCardSummaryConnector = crusadeCardSummaryConnector(CrusadeCardSummary);
