import {connect} from "react-redux";
import {State} from "../redux/types/state";
import {OrderOfBattleSummary} from "./order-of-battle-summary";

const mapStateToProps = (state: State) => ({
    ordersOfBattle: state.ordersOfBattle
});

export const orderOfBattleSummaryConnector = connect(mapStateToProps);
export const OrderOfBattleSummaryConnector = orderOfBattleSummaryConnector(OrderOfBattleSummary);
