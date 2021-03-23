import {CrusadeCard} from '../state/order-of-battle/crusade-card';
import {
    DeleteCrusadeCardAction,
    CreateCrusadeCardAction,
    UpdateCrusadeCardAction
} from '../action-creators/crusade-cards';
import {AvailableActions, CrusadeCardActions} from '../action-list';

export type CrusadeCardActionList = DeleteCrusadeCardAction |
    CreateCrusadeCardAction |
    UpdateCrusadeCardAction

type CrusadeCardHelper = (crusadeCards: Record<string, CrusadeCard>, action: CrusadeCardActionList) => Record<string, CrusadeCard>

const deleteCrusadeCard : CrusadeCardHelper = (crusadeCards, action) => {
    const newCrusadeCards = {...crusadeCards};

    delete newCrusadeCards[(action as DeleteCrusadeCardAction).payload.crusadeCardId];

    return newCrusadeCards;
};

const addCrusadeCard : CrusadeCardHelper = (crusadeCards, action) => {
    const {
        newCrusadeCard,
        selectedCrusadeCardId,
    } = (action as CreateCrusadeCardAction).payload;
    return {
        ...crusadeCards,
        [selectedCrusadeCardId]: newCrusadeCard
    };
};


const updateCrusadeCard : CrusadeCardHelper = (crusadeCards, action) => {
    const {
        selectedCrusadeCardId,
        updates
    } = (action as UpdateCrusadeCardAction).payload;
    const newCrusadeCard = {
        ...crusadeCards[selectedCrusadeCardId],
        ...updates
    };

    return {
        ...crusadeCards,
        [selectedCrusadeCardId]: newCrusadeCard
    };
};

const selectCrusadeCard : CrusadeCardHelper = (crusadeCards) => crusadeCards;

export const crusadeCardHelpers : CrusadeCardHelper = (crusadeCards, action) => {
    const actionMap : Record<CrusadeCardActions, CrusadeCardHelper> = {
        [AvailableActions.CREATE_CRUSADE_CARD]: addCrusadeCard,
        [AvailableActions.DELETE_CRUSADE_CARD]: deleteCrusadeCard,
        [AvailableActions.UPDATE_CRUSADE_CARD]: updateCrusadeCard,
        [AvailableActions.SELECT_CRUSADE_CARD]: selectCrusadeCard
    };

    return actionMap[action.type as CrusadeCardActions] ?
        actionMap[action.type as CrusadeCardActions](crusadeCards, action) :
        crusadeCards;
};
