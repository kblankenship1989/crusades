import {connect} from 'react-redux';
import {State} from '../redux/types/state';
import {HomeScreen} from './home-screen';
import {createOrderOfBattle, loadSelectedOrderOfBattle, deleteSelectedOrderOfBattle} from '../redux/action-creators/current-order-of-battle';

const mapStateToProps = (state: State) => ({
    ordersOfBattle: state.ordersOfBattle
});

const mapDispatchToProp = {
    createOrderOfBattle,
    loadSelectedOrderOfBattle,
    deleteSelectedOrderOfBattle
};

export const homeScreenConnector = connect(mapStateToProps, mapDispatchToProp);
export const HomeScreenConnector = homeScreenConnector(HomeScreen);
