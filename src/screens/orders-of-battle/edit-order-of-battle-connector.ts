import {connect} from 'react-redux';
import {saveOrderOfBattle} from '../../redux/action-creators/orders-of-battle';
import {EditOrderOfBattle} from './edit-order-of-battle';
import {State} from '../../redux/state';

const mapStateToProps = (state: State) => {
    const {
        selectedOrderOfBattleId,
        account
    } = state;

    return {
        orderOfBattle: account.ordersOfBattle[selectedOrderOfBattleId as string],
        selectedOrderOfBattleId: selectedOrderOfBattleId as string
    };
};

const mapDispatchToProps = {
    saveOrderOfBattle
};

export const editOrderOfBattleConnector = connect(mapStateToProps, mapDispatchToProps);
export const EditOrderOfBattleConnector = editOrderOfBattleConnector(EditOrderOfBattle);
