import React from 'react';
import {TouchableOpacity, View, ListRenderItem, Text} from 'react-native';
import {OrderOfBattle} from '../types/state/order-of-battle';
import {appStyles} from '../../styles';
import {getColorScheme} from '../helpers/getColorScheme';
import {factionsIconMap} from '../configs/40k-icons';
import {OrderOfBattleListItemProps} from '../types/components/props';

export const OrderOfBattleListItem = ({selectOrderOfBattle, deleteSelectedOrderOfBattle} : OrderOfBattleListItemProps) : ListRenderItem<OrderOfBattle> => ({item, index}) : JSX.Element => {
    const IconToRender = factionsIconMap[item.faction];
    const styles = appStyles(getColorScheme());

    return (
        <View style={styles.swipeOutRowFront}>
            <TouchableOpacity
                onPress={() =>  selectOrderOfBattle(index)}
                onLongPress={() => deleteSelectedOrderOfBattle(index)}
                style={styles.row}
            >
                <IconToRender
                    size={18}
                    color={'#8ba4c9'}
                />
                <Text>{item.title}</Text>
            </TouchableOpacity>
        </View>
    );
};
