import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {FactionImageContainer} from '../containers/faction-image-container';
import {OrderOfBattle} from '../types/state/order-of-battle';

type OrderOfBattleListItemProps = {
    deleteSelectedOrderOfBattle: (index: number) => void,
    selectOrderOfBattle: (index: number) => void,
    index: number,
    orderOfBattle: OrderOfBattle
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        opacity: 1,
        fontSize: 24
    },
    listItemContainer: {
        flex: 1
    }
});

export const OrderOfBattleListItem = ({
    selectOrderOfBattle,
    deleteSelectedOrderOfBattle,
    index,
    orderOfBattle
} : OrderOfBattleListItemProps) : JSX.Element => {
    return (
        <TouchableOpacity
            onPress={() =>  selectOrderOfBattle(index)}
            onLongPress={() => deleteSelectedOrderOfBattle(index)}
            style={styles.listItemContainer}
        >
            <FactionImageContainer
                faction={orderOfBattle.faction}
            >
                <Text style={styles.title}>
                    {orderOfBattle.title || 'Untitled'}
                </Text>
            </FactionImageContainer>
        </TouchableOpacity>
    );
};
