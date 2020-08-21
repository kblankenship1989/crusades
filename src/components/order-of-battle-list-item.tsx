import React from 'react';
import {TouchableOpacity, View, ListRenderItem, Text} from 'react-native';
import {OrderOfBattle} from '../redux/types/order-of-battle';
import {appStyles} from '../../styles';
import {getColorScheme} from '../helpers/getColorScheme';
import {factionsIconMap} from '../configs/40k-icons';

type OrderOfBattleListItemProps = {
    selectOrderOfBattle: (index: number) => void
}
export const OrderOfBattleListItem = ({selectOrderOfBattle} : OrderOfBattleListItemProps) : ListRenderItem<OrderOfBattle> => ({item, index}) : JSX.Element => {
    const IconToRender = factionsIconMap[item.faction];
    const styles = appStyles(getColorScheme());

    return (
        <View style={styles.swipeOutRowFront}>
            <TouchableOpacity
                onPress={() =>  selectOrderOfBattle(index)}
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
