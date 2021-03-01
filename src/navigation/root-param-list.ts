export enum Screens {
    ORDERS_OF_BATTLE = 'ORDERS_OF_BATTLE',
    ORDER_OF_BATTLE_SUMMARY = 'ORDER_OF_BATTLE_SUMMARY',
    EDIT_ORDER_OF_BATTLE = 'EDIT_ORDER_OF_BATTLE',
    BATTLE_SUMMARY = 'BATTLE_SUMMARY',
    LOGIN = 'LOGIN',
    ACCOUNT_SUMMARY = 'ACCOUNT_SUMMARY',
    EDIT_PLAYER = 'EDIT_PLAYER',
    CRUSADE_CARD_SUMMARY = 'CRUSADE_CARD_SUMMARY',
    ACCOUNT_LIST = 'ACCOUNT_LIST'
}

export type RootParamList = Record<Screens, Record<string, any> | undefined> & {
    [Screens.EDIT_PLAYER]: {
        isNew: boolean
    };
    [Screens.ORDER_OF_BATTLE_SUMMARY]: {
        isNew: boolean
    }
};
