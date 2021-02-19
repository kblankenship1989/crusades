import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';

import {homeScreenConnector} from './home-screen-connector';
import {ActionFixedFooterContainer} from '../containers/action-fixed-footer-container';
import {BackgroundImageListItem} from '../components/background-image-list-item';

export type HomeProps = ConnectedProps<typeof homeScreenConnector> & {
    navigation: StackNavigationProp<RootParamList, 'Home'>
}

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
        <BackgroundImageListItem
            index={index}
            title={item.title || 'Untitled'}
            onPress={selectOrderOfBattle}
            onDelete={deleteSelectedOrderOfBattle}
            imageKey={item.faction}
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
