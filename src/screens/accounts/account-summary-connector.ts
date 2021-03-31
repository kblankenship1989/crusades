import {State} from '../../redux/state';
import {connect} from 'react-redux';
import {AccountSummary} from './account-summary';

const mapStateToProps = (state: State) => ({
    account: state.account
});

export const accountSummaryConnector = connect(mapStateToProps);
export const AccountSummaryConnector = accountSummaryConnector(AccountSummary);
