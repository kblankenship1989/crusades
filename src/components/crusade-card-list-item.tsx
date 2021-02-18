import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {CrusadeCard} from '../types/state/crusade-card';

type CrusadeCardListItemProps = {
    selectCrusadeCard: (index: number) => void,
    deleteCrusadeCard: (index: number) => void,
    updateSelected: (index: number, isSelected: boolean) => void,
    crusadeCard: CrusadeCard,
    index: number
}

const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1
    }
});

export const CrusadeCardListItem = ({
    selectCrusadeCard,
    deleteCrusadeCard,
    updateSelected,
    crusadeCard,
    index
} : CrusadeCardListItemProps) : JSX.Element => {
    return (
        <TouchableOpacity
            onPress={() =>  selectCrusadeCard(index)}
            onLongPress={() => deleteCrusadeCard(index)}
            style={styles.listItemContainer}
        >
            <Text>{crusadeCard.name || crusadeCard.unit}</Text>
        </TouchableOpacity>
    );
};
