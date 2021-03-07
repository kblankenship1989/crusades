import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootParamList, Screens} from './root-param-list';
import {ConnectedProps} from 'react-redux';
import {mainNavigatorConnector} from './main-navigator-connector';
import {AccountListConnector,
    EditPlayerConnector,
    AccountSummaryConnector,
    EditOrderOfBattleConnector,
    OrderOfBattleSummaryConnector,
    CrusadeCardListConnector,
    EditCrusadeCardConnector,
    OrdersOfBattleListConnector,
    CrusadeCardSummaryConnector
} from '../screens';

const MainStack = createStackNavigator<RootParamList>();

export type MainNavigatorProps = ConnectedProps<typeof mainNavigatorConnector>

export const MainNavigator = ({selectedAccountId} : MainNavigatorProps) : JSX.Element => {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName={selectedAccountId ? Screens.ORDERS_OF_BATTLE : Screens.ACCOUNT_LIST}>
                <MainStack.Screen name={Screens.ACCOUNT_LIST} component={AccountListConnector}/>
                <MainStack.Screen name={Screens.EDIT_PLAYER} component={EditPlayerConnector}/>
                <MainStack.Screen name={Screens.ACCOUNT_SUMMARY} component={AccountSummaryConnector}/>
                <MainStack.Screen name={Screens.ORDERS_OF_BATTLE} component={OrdersOfBattleListConnector}/>
                <MainStack.Screen name={Screens.EDIT_ORDER_OF_BATTLE} component={EditOrderOfBattleConnector}/>
                <MainStack.Screen name={Screens.ORDER_OF_BATTLE_SUMMARY} component={OrderOfBattleSummaryConnector}/>
                <MainStack.Screen name={Screens.CRUSADE_CARDS} component={CrusadeCardListConnector}/>
                <MainStack.Screen name={Screens.EDIT_CRUSADE_CARD} component={EditCrusadeCardConnector}/>
                <MainStack.Screen name={Screens.CRUSADE_CARD_SUMMARY} component={CrusadeCardSummaryConnector}/>
            </MainStack.Navigator>
        </NavigationContainer>
    );
};
