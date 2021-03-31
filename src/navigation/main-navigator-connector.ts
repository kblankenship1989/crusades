import {State} from '../redux/state';
import {connect} from 'react-redux';
import {MainNavigator} from './main-navigator';

const mapStateToProps = (state: State) => ({
    account: state.account
});

export const mainNavigatorConnector = connect(mapStateToProps);
export const MainNavigatorConnector = mainNavigatorConnector(MainNavigator);
