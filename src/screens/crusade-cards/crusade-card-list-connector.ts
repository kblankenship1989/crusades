import {connect} from 'react-redux';

import {CrusadeCardList} from './crusade-card-list';
import {State} from '../../redux/state';
import {
    createCrusadeCard,
    loadSelectedCrusadeCard,
    deleteCrusadeCard
} from '../../redux/action-creators/crusade-cards';

const mapStateToProps = (state: State) => {
    const {
        accounts,
        selectedAccountId,
        selectedOrderOfBattleId
    } = state;

    return {
        crusadeCards: accounts[selectedAccountId as string].ordersOfBattle[selectedOrderOfBattleId as string].crusadeCards
    };
};

const mapDispatchToProp = {
    createCrusadeCard,
    loadSelectedCrusadeCard,
    deleteCrusadeCard
};

export const crusadeCardListConnector = connect(mapStateToProps, mapDispatchToProp);
export const CrusadeCardListConnector = crusadeCardListConnector(CrusadeCardList);
