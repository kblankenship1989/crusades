export enum Screens {
    CRUSADE_CARDS = 'CRUSADE_CARDS',
    ORDERS_OF_BATTLE = 'ORDERS_OF_BATTLE',
    ORDER_OF_BATTLE_SUMMARY = 'ORDER_OF_BATTLE_SUMMARY',
    EDIT_ORDER_OF_BATTLE = 'EDIT_ORDER_OF_BATTLE',
    LOGIN = 'LOGIN',
    ACCOUNT_SUMMARY = 'ACCOUNT_SUMMARY',
    EDIT_PLAYER = 'EDIT_PLAYER',
    CRUSADE_CARD_SUMMARY = 'CRUSADE_CARD_SUMMARY',
    ACCOUNT_LIST = 'ACCOUNT_LIST',
    EDIT_CRUSADE_CARD = 'EDIT_CRUSADE_CARD',
    BATTLE_RESULT_SUMMARY = 'BATTLE_RESULT_SUMMARY',
    BATTLE_RESULTS = 'BATTLE_RESULTS',
    EDIT_BATTLE_RESULT = 'EDIT_BATTLE_RESULT'
}

export type RootParamList = Record<Screens, Record<string, any> | undefined> & {
    [Screens.EDIT_PLAYER]: {
        isNew: boolean
    }
    [Screens.EDIT_ORDER_OF_BATTLE]: {
        isNew: boolean
    }
    [Screens.EDIT_CRUSADE_CARD]: {
        isNew: boolean
    }
    [Screens.EDIT_BATTLE_RESULT]: {
        isNew: boolean
    }
};
