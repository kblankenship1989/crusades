import {connect} from 'react-redux';
import {State} from '../redux/types/state';
import {saveCurrentCrusadeCard} from '../redux/action-creators/current-crusade-card';
import {CrusadeCardSummary} from './crusade-card-summary';

const mapStateToProps = (state: State) => ({
    currentCrusadeCard: state.currentCrusadeCard,
});

const mapDispatchToProps = {
    saveCurrentCrusadeCard
};

export const crusadeCardSummaryConnector = connect(mapStateToProps, mapDispatchToProps);
export const CrusadeCardSummaryConnector = crusadeCardSummaryConnector(CrusadeCardSummary);
