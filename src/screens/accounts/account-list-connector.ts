import {connect} from 'react-redux';

import {AccountList} from './account-list';
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

export const accountListConnector = connect(mapStateToProps, mapDispatchToProp);
export const AccountListConnector = accountListConnector(AccountList);
