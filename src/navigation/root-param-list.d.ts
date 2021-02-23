export const enum Screens {
    ORDERS_OF_BATTLE = 'ORDERS_OF_BATTLE',
    ORDER_OF_BATTLE_SUMMARY = 'ORDER_OF_BATTLE_SUMMARY',
    EDIT_ORDER_OF_BATTLE = 'EDIT_ORDER_OF_BATTLE',
    BATTLE_SUMMARY = 'BATTLE_SUMMARY',
    LOGIN = 'LOGIN',
    ACCOUNT_SUMMARY = 'ACCOUNT_SUMMARY',
    EDIT_PLAYER = 'EDIT_PLAYER',
    CRUSADE_CARD_SUMMARY = 'CRUSADE_CARD_SUMMARY'
}

export type RootParamList<K = Screens, V = any> = {
    [Screens.ACCOUNT_SUMMARY]: undefined;
    [Screens.ORDERS_OF_BATTLE]: undefined;
    [Screens.ORDER_OF_BATTLE_SUMMARY]: undefined;
    [Screens.BATTLE_SUMMARY]: undefined;
    [Screens.LOGIN]: undefined;
    [Screens.EDIT_ORDER_OF_BATTLE]: undefined;
    [Screens.EDIT_PLAYER]: {
        isNew: boolean
    };
};
