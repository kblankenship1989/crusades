import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootParamList} from '../types';
import {View, Text} from 'react-native';

type OrderOfBattleSummaryProps = {
    route: RouteProp<RootParamList, 'OrderOfBattleSummary'>
};

export const OrderOfBattleSummary = ({route} : OrderOfBattleSummaryProps) : JSX.Element => {
    return (
        <View>
            <Text>{`Title: ${route.params.title}`}</Text>
        </View>
    );
};
