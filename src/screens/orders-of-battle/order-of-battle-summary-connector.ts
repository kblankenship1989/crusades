import {connect} from 'react-redux';
import {deleteOrderOfBattle, loadSelectedOrderOfBattle} from '../../redux/action-creators/orders-of-battle';
import {OrderOfBattleSummary} from './order-of-battle-summary';
import {State} from '../../redux/state';

const mapStateToProps = (state: State) => {
    const {
        selectedOrderOfBattleId,
        account
    } = state;

    return {
        orderOfBattle: account.ordersOfBattle[selectedOrderOfBattleId as string],
        selectedOrderOfBattleId: selectedOrderOfBattleId as string
    };
};

const mapDispatchToProps = {
    loadSelectedOrderOfBattle,
    deleteOrderOfBattle
};

export const orderOfBattleSummaryConnector = connect(mapStateToProps, mapDispatchToProps);
export const OrderOfBattleSummaryConnector = orderOfBattleSummaryConnector(OrderOfBattleSummary);
