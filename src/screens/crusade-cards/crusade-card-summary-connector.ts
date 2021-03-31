import {connect} from 'react-redux';
import {CrusadeCardSummary} from './crusade-card-summary';
import {State} from '../../redux/state';

const mapStateToProps = (state: State) => {
    const {
        selectedOrderOfBattleId,
        selectedCrusadeCardId,
        account
    } = state;

    return {
        crusadeCard: account.ordersOfBattle[selectedOrderOfBattleId as string].crusadeCards[selectedCrusadeCardId as string],
        selectedCrusadeCardId: selectedCrusadeCardId as string
    };
};


export const crusadeCardSummaryConnector = connect(mapStateToProps);
export const CrusadeCardSummaryConnector = crusadeCardSummaryConnector(CrusadeCardSummary);
