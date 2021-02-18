import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {appStyles} from '../../styles';
import {getColorScheme} from '../helpers/getColorScheme';
import {OrderOfBattleListItemProps} from '../types/components/props';
import {FactionImageContainer} from '../containers/faction-image-container';

export const OrderOfBattleListItem = ({
    selectOrderOfBattle,
    deleteSelectedOrderOfBattle,
    index,
    orderOfBattle
} : OrderOfBattleListItemProps) : JSX.Element => {
    const styles = appStyles(getColorScheme());

    return (
        <View style={styles.swipeOutRowFront}>
            <TouchableOpacity
                onPress={() =>  selectOrderOfBattle(index)}
                onLongPress={() => deleteSelectedOrderOfBattle(index)}
                style={styles.row}
            >
                <FactionImageContainer
                    faction={orderOfBattle.faction}
                >
                    <Text style={{
                        fontWeight: 'bold',
                        opacity: 1,
                        fontSize: 24
                    }}>{orderOfBattle.title || 'Untitled'}</Text>
                </FactionImageContainer>
            </TouchableOpacity>
        </View>
    );
};
