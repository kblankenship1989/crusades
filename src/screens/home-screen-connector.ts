import {connect} from 'react-redux';

import {HomeScreen} from './home-screen';
import {State} from '../redux/state';
import {
    createOrderOfBattle,
    loadSelectedOrderOfBattle,
    deleteOrderOfBattle
} from '../redux/action-creators/orders-of-battle';

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

export const homeScreenConnector = connect(mapStateToProps, mapDispatchToProp);
export const HomeScreenConnector = homeScreenConnector(HomeScreen);
