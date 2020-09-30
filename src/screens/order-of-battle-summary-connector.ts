import {connect} from 'react-redux';
import {State} from '../types/state';
import {OrderOfBattleSummary} from './order-of-battle-summary';
import {saveCurrentOrderOfBattle} from '../redux/action-creators/current-order-of-battle';
import {addCrusadeCard, deleteCrusadeCard, loadCurrentCrusadeCard} from '../redux/action-creators/current-crusade-card';

const mapStateToProps = (state: State) => ({
    currentOrderOfBattle: state.currentOrderOfBattle,
});

const mapDispatchToProps = {
    saveCurrentOrderOfBattle,
    deleteCrusadeCard,
    addCrusadeCard,
    loadCurrentCrusadeCard
};

export const orderOfBattleSummaryConnector = connect(mapStateToProps, mapDispatchToProps);
export const OrderOfBattleSummaryConnector = orderOfBattleSummaryConnector(OrderOfBattleSummary);
