/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/display-name */
import React from 'react';
import {TouchableOpacity, View, ListRenderItem, Text} from 'react-native';
import {OrderOfBattle} from '../types/state/order-of-battle';
import {appStyles} from '../../styles';
import {getColorScheme} from '../helpers/getColorScheme';
import {OrderOfBattleListItemProps} from '../types/components/props';
import { FactionImageContainer } from '../containers/faction-image-container';

export const OrderOfBattleListItem = ({selectOrderOfBattle, deleteSelectedOrderOfBattle} : OrderOfBattleListItemProps) : ListRenderItem<OrderOfBattle> => ({item, index}) : JSX.Element => {
    const styles = appStyles(getColorScheme());

    return (
        <View style={styles.swipeOutRowFront}>
            <TouchableOpacity
                onPress={() =>  selectOrderOfBattle(index)}
                onLongPress={() => deleteSelectedOrderOfBattle(index)}
                style={styles.row}
            >
                <FactionImageContainer
                    faction={item.faction}
                >
                    <Text style={{
                        fontWeight: 'bold',
                        opacity: 1,
                        fontSize: 24
                    }}>{item.title || 'Untitled'}</Text>
                </FactionImageContainer>
            </TouchableOpacity>
        </View>
    );
};
