import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OrdersOfBattleListConnector} from '../screens/orders-of-battle/orders-of-battle-list-connector';
import {NavigationContainer} from '@react-navigation/native';
import {RootParamList, Screens} from './root-param-list';
import {ConnectedProps} from 'react-redux';
import {mainNavigatorConnector} from './main-navigator-connector';
import {AccountListConnector} from '../screens/accounts/account-list-connector';
import {EditPlayerConnector} from '../screens/accounts/edit-player-connector';
import {AccountSummaryConnector} from '../screens/accounts/account-summary-connector';

const MainStack = createStackNavigator<RootParamList>();

export type MainNavigatorProps = ConnectedProps<typeof mainNavigatorConnector>

export const MainNavigator = ({selectedAccountId} : MainNavigatorProps) : JSX.Element => {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName={selectedAccountId ? Screens.ORDERS_OF_BATTLE : Screens.ACCOUNT_LIST}>
                <MainStack.Screen name={Screens.ORDERS_OF_BATTLE} component={OrdersOfBattleListConnector}/>
                {/* <MainStack.Screen name={Screens.ORDER_OF_BATTLE_SUMMARY} component={OrderOfBattleSummaryConnector}/> */}
                {/* <MainStack.Screen name={Screens.BATTLE_SUMMARY} component={BattleSummary}/> */}
                <MainStack.Screen name={Screens.ACCOUNT_LIST} component={AccountListConnector}/>
                <MainStack.Screen name={Screens.EDIT_PLAYER} component={EditPlayerConnector}/>
                <MainStack.Screen name={Screens.ACCOUNT_SUMMARY} component={AccountSummaryConnector}/>
            </MainStack.Navigator>
        </NavigationContainer>
    );
};
