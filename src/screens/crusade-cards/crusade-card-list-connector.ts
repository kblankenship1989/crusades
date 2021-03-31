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
        account,
        selectedOrderOfBattleId,
        isBattleInProgress
    } = state;

    return {
        crusadeCards: account.ordersOfBattle[selectedOrderOfBattleId as string].crusadeCards,
        isBattleInProgress
    };
};

const mapDispatchToProp = {
    createCrusadeCard,
    loadSelectedCrusadeCard,
    deleteCrusadeCard
};

export const crusadeCardListConnector = connect(mapStateToProps, mapDispatchToProp);
export const CrusadeCardListConnector = crusadeCardListConnector(CrusadeCardList);
