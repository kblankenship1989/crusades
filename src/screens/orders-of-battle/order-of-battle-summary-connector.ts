import {connect} from 'react-redux';
import {saveOrderOfBattle, deleteOrderOfBattle} from '../../redux/action-creators/orders-of-battle';
import {OrderOfBattleSummary} from './order-of-battle-summary';
import {State} from '../../redux/state';
// import {addCrusadeCard, deleteCrusadeCard, loadCurrentCrusadeCard} from '../redux/action-creators/current-crusade-card';

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
    saveOrderOfBattle,
    deleteOrderOfBattle
};

export const orderOfBattleSummaryConnector = connect(mapStateToProps, mapDispatchToProps);
export const OrderOfBattleSummaryConnector = orderOfBattleSummaryConnector(OrderOfBattleSummary);
