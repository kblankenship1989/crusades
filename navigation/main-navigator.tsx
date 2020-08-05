import React from 'react';
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';
import {RootParamList} from '../types';
import {HomeScreen} from '../screens/home-screen';
import {OrderOfBattleSummary} from '../screens/order-of-battle-summary';
import Colors from '../constants/Colors';
import {ColorSchemeName} from 'react-native';
import {useColorScheme} from '../hooks/useColorScheme';

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
        <MainStack.Navigator initialRouteName={'Home'}>
            <MainStack.Screen options={navigationOptions(colorScheme, 'Crusades!!!')} name={'Home'} component={HomeScreen}/>
            <MainStack.Screen options={navigationOptions(colorScheme, 'Order of Battle')} name={'OrderOfBattleSummary'} component={OrderOfBattleSummary}/>
        </MainStack.Navigator>
    );
};
