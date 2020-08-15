import React from 'react';
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';
import {RootParamList} from '../types/root-param-list';
import Colors from '../constants/Colors';
import {ColorSchemeName} from 'react-native';
import {useColorScheme} from '../hooks/useColorScheme';
import {OrderOfBattleSummaryConnector} from '../screens/order-of-battle-summary-connector';
import {HomeScreenConnector} from '../screens/home-screen-connector';
import {NavigationContainer} from '@react-navigation/native';

const MainStack = createStackNavigator<RootParamList>();

const navigationOptions = (colorScheme: NonNullable<ColorSchemeName>, title : string) : StackNavigationOptions => ({
    title,
    headerStyle: {
        backgroundColor: Colors[colorScheme].header.background
    },
    headerTintColor: Colors[colorScheme].header.color,
    headerTitleStyle: {
        fontWeight: 'bold'
    }
});

export const MainNavigator = () : JSX.Element => {
    const colorScheme = useColorScheme();

    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName={'Home'}>
                <MainStack.Screen options={navigationOptions(colorScheme, 'Crusades!!!')} name={'Home'} component={HomeScreenConnector}/>
                <MainStack.Screen options={navigationOptions(colorScheme, 'Order of Battle')} name={'OrderOfBattleSummary'} component={OrderOfBattleSummaryConnector}/>
            </MainStack.Navigator>
        </NavigationContainer>
    );
};
