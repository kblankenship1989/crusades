import {connect} from 'react-redux';

import {OrdersOfBattleList} from './orders-of-battle-list';
import {State} from '../../redux/state';
import {
    createOrderOfBattle,
    loadSelectedOrderOfBattle,
    deleteOrderOfBattle
} from '../../redux/action-creators/orders-of-battle';

const mapStateToProps = (state: State) => {
    const {
        accounts,
        selectedAccountId
    } = state;

    return {
        ordersOfBattle: accounts[selectedAccountId as string].ordersOfBattle
    };
};

const mapDispatchToProp = {
    createOrderOfBattle,
    loadSelectedOrderOfBattle,
    deleteOrderOfBattle
};

export const ordersOfBattleListConnector = connect(mapStateToProps, mapDispatchToProp);
export const OrdersOfBattleListConnector = ordersOfBattleListConnector(OrdersOfBattleList);
