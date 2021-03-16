import {State} from '../../redux/state';
import {saveCrusadeCard} from '../../redux/action-creators/crusade-cards';
import {connect} from 'react-redux';
import {EditCombatTallies} from './edit-combat-tallies';

const mapStateToProps = (state: State) => {
    const {
        selectedAccountId,
        selectedCrusadeCardId,
        selectedOrderOfBattleId,
        accounts
    } = state;
    const combatTallies = accounts[selectedAccountId as string].ordersOfBattle[selectedOrderOfBattleId as string].crusadeCards[selectedCrusadeCardId as string].combatTallies;

    return {
        selectedCrusadeCardId,
        combatTallies
    };
};

const mapDispatchToProps = {
    saveCrusadeCard
};

export const editCombatTalliesConnector = connect(mapStateToProps, mapDispatchToProps);
export const EditCombatTalliesConnector = editCombatTalliesConnector(EditCombatTallies);
