import React from 'react';
import {TouchableOpacity, View, ListRenderItem, Text} from 'react-native';
import {OrderOfBattle} from '../redux/types/order-of-battle';
import {appStyles} from '../../styles';
import {getColorScheme} from '../helpers/getColorScheme';
import {factionsIconMap} from '../configs/40k-icons';
import {CrusadeCard} from '../redux/types/crusade-card';

type CrusadeCardListItemProps = {
    selectCrusadeCard: (index: number) => void
}
export const CrusadeCardListItem = ({selectCrusadeCard} : CrusadeCardListItemProps) : ListRenderItem<CrusadeCard> => ({item, index}) : JSX.Element => {
    const IconToRender = factionsIconMap[item.faction];
    const styles = appStyles(getColorScheme());

    return (
        <View style={styles.swipeOutRowFront}>
            <TouchableOpacity
                onPress={() =>  selectCrusadeCard(index)}
                style={styles.row}
            >
                <IconToRender
                    size={18}
                    color={'#8ba4c9'}
                />
                <Text>{item.name || item.unit}</Text>
            </TouchableOpacity>
        </View>
    );
};
