import React from 'react';
import {FlatList} from 'react-native';

import {OrderOfBattleListItem} from '../components/order-of-battle-list-item';
import {HomeProps} from '../types/screens/props';
import {ActionFixedFooterContainer} from '../containers/action-fixed-footer-container';
import {Text} from 'react-native-elements';

export const HomeScreen : React.FC<HomeProps> = ({
    loadSelectedOrderOfBattle,
    deleteSelectedOrderOfBattle,
    createOrderOfBattle,
    navigation,
    ordersOfBattle
}) => {
    const selectOrderOfBattle = (index: number) : void => {
        loadSelectedOrderOfBattle(index);
        navigation.push('OrderOfBattleSummary');
    };

    const addOrderOfBattle = () : void => {
        createOrderOfBattle();

        navigation.push('OrderOfBattleSummary');
    };

    return (
        <ActionFixedFooterContainer
            onAdd={addOrderOfBattle}
        >
            {ordersOfBattle.length ?
                <FlatList
                    renderItem={OrderOfBattleListItem({selectOrderOfBattle, deleteSelectedOrderOfBattle})}
                    keyExtractor={(orderOfBattle) => orderOfBattle.id}
                    data={ordersOfBattle}
                />
                :
                <Text>Click `&ldquo;` + ADD `&rdquo;` to create a new Crusade Force</Text>
            }
        </ActionFixedFooterContainer>
    );
};
