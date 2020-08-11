import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {ConnectedProps} from 'react-redux';

import {RootParamList} from '../types/root-param-list';
import {View} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {RequisitionPointsIcon} from '../components/requisition-points-icon';
import {useColorScheme} from '../hooks/useColorScheme';
import {appStyles} from '../../styles';
import {orderOfBattleSummaryConnector} from './order-of-battle-summary-connector';

export type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector>;

export const OrderOfBattleSummary = ({currentOrderOfBattle} : OrderOfBattleSummaryProps) : JSX.Element => {
    const colorScheme = useColorScheme();
    const styles = appStyles(colorScheme);

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
                value={currentOrderOfBattle.title}
                style={styles.textInput}
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
                value={currentOrderOfBattle.faction}
                style={styles.textInput}
            />
            <RequisitionPointsIcon
                currentPoints={currentOrderOfBattle.requisitionPoints}
            />
        </View>
    );
};
