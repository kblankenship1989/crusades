import {connect} from 'react-redux';

import {Login} from './login';
import {State} from '../../redux/state';
import {createAccount, loadSelectedAccount, deleteAccount} from '../../redux/action-creators/accounts';

const mapStateToProps = (state: State) => ({
    accounts: state.accounts
});

const mapDispatchToProp = {
    createAccount,
    loadSelectedAccount,
    deleteAccount
};

export const loginConnector = connect(mapStateToProps, mapDispatchToProp);
export const LoginConnector = loginConnector(Login);
