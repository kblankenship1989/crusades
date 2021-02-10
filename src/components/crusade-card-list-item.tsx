import React from 'react';
import {TouchableOpacity, View, ListRenderItem, Text} from 'react-native';
import {appStyles} from '../../styles';
import {getColorScheme} from '../helpers/getColorScheme';
import {factionsIconMap} from '../configs/40k-icons';
import {CrusadeCard} from '../types/state/crusade-card';
import {CrusadeCardListItemProps} from '../types/components/props';

export const CrusadeCardListItem = ({selectCrusadeCard} : CrusadeCardListItemProps) : ListRenderItem<CrusadeCard> => ({item, index}) => {
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
