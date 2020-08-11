import {connect} from 'react-redux';
import {State} from '../redux/types/state';
import {OrderOfBattleSummary} from './order-of-battle-summary';

const mapStateToProps = (state: State) => ({
    currentOrderOfBattle: state.currentOrderOfBattle,
});

export const orderOfBattleSummaryConnector = connect(mapStateToProps);
export const OrderOfBattleSummaryConnector = orderOfBattleSummaryConnector(OrderOfBattleSummary);
