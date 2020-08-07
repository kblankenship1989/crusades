import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootParamList} from '../types/root-param-list';
import {View} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {RequisitionPointsIcon} from '../components/requisition-points-icon';
import {useColorScheme} from '../hooks/useColorScheme';
import {appStyles} from '../../styles';
import { OrderOfBattle } from '../redux/types/order-of-battle';

export type OrderOfBattleSummaryProps = {
    ordersOfBattle: OrderOfBattle[],
    route: RouteProp<RootParamList, 'OrderOfBattleSummary'>
};

export const OrderOfBattleSummary = ({route} : OrderOfBattleSummaryProps) : JSX.Element => {
    const colorScheme = useColorScheme();
    const styles = appStyles(colorScheme);

    const title = route.params.orderOfBattleTitle;


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
                style={styles.textInput}
            />
            {/* <Input
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
                style={styles.textInput}
            />
            <RequisitionPointsIcon
                currentPoints={requisitionPoints}
            /> */}
        </View>
    );
};
