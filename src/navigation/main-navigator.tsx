import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OrderOfBattleSummaryConnector} from '../screens/orders-of-battle/order-of-battle-summary-connector';
import {HomeScreenConnector} from '../screens/home-screen-connector';
import {NavigationContainer} from '@react-navigation/native';
import {BattleSummary} from '../screens/orders-of-battle/battle-summary';
import {RootParamList} from './root-param-list';
import {ConnectedProps} from 'react-redux';
import {mainNavigatorConnector} from './main-navigator-connector';
import {LoginConnector} from '../screens/accounts/login-connector';

const MainStack = createStackNavigator<RootParamList>();

export type MainNavigatorProps = ConnectedProps<typeof mainNavigatorConnector>

export const MainNavigator = ({selectedAccountId} : MainNavigatorProps) : JSX.Element => {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName={selectedAccountId ? 'Home' : 'Login'}>
                <MainStack.Screen name={'Home'} component={HomeScreenConnector}/>
                <MainStack.Screen name={'OrderOfBattleSummary'} component={OrderOfBattleSummaryConnector}/>
                <MainStack.Screen name={'BattleSummary'} component={BattleSummary}/>
                <MainStack.Screen name={'Login'} component={LoginConnector}/>
            </MainStack.Navigator>
        </NavigationContainer>
    );
};
