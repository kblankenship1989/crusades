import {connect} from 'react-redux';
import {saveOrderOfBattle} from '../../redux/action-creators/orders-of-battle';
import {OrderOfBattleSummary} from './order-of-battle-summary';
import {State} from '../../redux/state';

const mapStateToProps = (state: State) => {
    const {
        selectedAccountId,
        selectedOrderOfBattleId,
        accounts
    } = state;

    return {
        orderOfBattle: accounts[selectedAccountId as string].ordersOfBattle[selectedOrderOfBattleId as string],
        selectedOrderOfBattleId: selectedOrderOfBattleId as string
    };
};

const mapDispatchToProps = {
    saveOrderOfBattle
};

export const orderOfBattleSummaryConnector = connect(mapStateToProps, mapDispatchToProps);
export const OrderOfBattleSummaryConnector = orderOfBattleSummaryConnector(OrderOfBattleSummary);
