import {State} from '../../redux/state';
import {saveAccount} from '../../redux/action-creators/accounts';
import {connect} from 'react-redux';
import {EditPlayer} from './edit-player';

const mapStateToProps = (state: State) => ({
    player: state.account.player
});

const mapDispatchToProps = {
    saveAccount
};

export const editPlayerConnector = connect(mapStateToProps, mapDispatchToProps);
export const EditPlayerConnector = editPlayerConnector(EditPlayer);
