import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {OrderOfBattleListItem} from '../components/order-of-battle-list-item';
import {HomeProps} from '../types/screens/props';
import {ActionFixedFooterContainer} from '../containers/action-fixed-footer-container';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {OrderOfBattle} from '../types/state/order-of-battle';

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

    const renderListItem : ListRenderItem<OrderOfBattle> = ({item, index}) => (
        <OrderOfBattleListItem
            index={index}
            orderOfBattle={item}
            selectOrderOfBattle={selectOrderOfBattle}
            deleteSelectedOrderOfBattle={deleteSelectedOrderOfBattle}
        />
    );

    return (
        <ActionFixedFooterContainer
            onAdd={addOrderOfBattle}
        >
            {ordersOfBattle.length ?
                <FlatList
                    renderItem={renderListItem}
                    keyExtractor={(orderOfBattle) => orderOfBattle.id.toString()}
                    data={ordersOfBattle}
                />
                :
                <ScrollView>
                    <Text>{'Click + ADD to create a new Crusade Force'}</Text>
                </ScrollView>
            }
        </ActionFixedFooterContainer>
    );
};
