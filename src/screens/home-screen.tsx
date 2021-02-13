import React from 'react';
import {ScrollView} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OrderOfBattleListItem} from '../components/order-of-battle-list-item';
import {SwipeOutDeleteRight} from '../components/swipe-out-delete-right';
import {HomeProps} from '../types/screens/props';
import { ActionFooter } from '../components/action-footer';

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
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <SwipeListView
                    renderItem={OrderOfBattleListItem({selectOrderOfBattle})}
                    renderHiddenItem={SwipeOutDeleteRight({onDelete: deleteSelectedOrderOfBattle})}
                    keyExtractor={(orderOfBattle) => orderOfBattle.title}
                    data={ordersOfBattle}
                    rightOpenValue={-75}
                />
            </ScrollView>
            <ActionFooter
                onAdd={addOrderOfBattle}
            />
        </SafeAreaView>
    );
}
