import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootParamList} from '../types/root-param-list';
import {View} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {RequisitionPointsIcon} from '../components/requisition-points-icon';

type OrderOfBattleSummaryProps = {
    route: RouteProp<RootParamList, 'OrderOfBattleSummary'>
};

export const OrderOfBattleSummary = ({route} : OrderOfBattleSummaryProps) : JSX.Element => {
    const {
        title,
        faction,
        requisitionPoints
    } = route.params.orderOfBattle;

    return (
        <View>
            <Input
                leftIcon={
                    <Icon
                        size={18}
                        name={'format-title'}
                        type={'material-community'}
                    />
                }
                placeholder={'Title'}
                onChangeText={() => null}
                value={title}
                style={{
                    fontSize: 18,
                    margin: 10
                }}
            />
            <Input
                leftIcon={
                    <Icon
                        size={18}
                        name={'sword-cross'}
                        type={'material-community'}
                    />
                }
                placeholder={'Faction'}
                onChangeText={() => null}
                value={faction}
                style={{
                    fontSize: 18,
                    margin: 10
                }}
            />
            <RequisitionPointsIcon
                currentPoints={requisitionPoints}
            />
        </View>
    );
};
