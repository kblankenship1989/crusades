import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {appStyles} from '../../styles';
import {getColorScheme} from '../helpers/getColorScheme';
import {CrusadeCardListItemProps} from '../types/components/props';

export const CrusadeCardListItem = ({
    selectCrusadeCard,
    deleteCrusadeCard,
    updateSelected,
    crusadeCard,
    index
} : CrusadeCardListItemProps) : JSX.Element => {
    const styles = appStyles(getColorScheme());

    return (
        <View style={styles.swipeOutRowFront}>
            <TouchableOpacity
                onPress={() =>  selectCrusadeCard(index)}
                onLongPress={() => deleteCrusadeCard(index)}
                style={styles.row}
            >
                <Text>{crusadeCard.name || crusadeCard.unit}</Text>
            </TouchableOpacity>
        </View>
    );
};
