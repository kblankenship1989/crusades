import {State} from '../../redux/state';
import {connect} from 'react-redux';
import {InBattle} from './in-battle';

const mapStateToProps = (state: State) => {
    const {
        isBattleInProgress,
        selectedOrderOfBattleId,
        account
    } = state;

    return {
        crusadeCards: account.ordersOfBattle[selectedOrderOfBattleId as string].crusadeCards,
        isBattleInProgress
    };
};

const mapDispatchToProps = {

};

export const inBattleConnector = connect(mapStateToProps, mapDispatchToProps);
export const InBattleConnector = inBattleConnector(InBattle);
