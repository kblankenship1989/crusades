import React from 'react';
import {
    Container,
    Header,
    Text,
    Button,
    Footer,
    FooterTab
} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {ordersOfBattleListConnector} from './orders-of-battle-list-connector';
import {OrderOfBattle} from '../../redux/state/order-of-battle';
import {SwipeListWrapper} from '../../components/swipe-list-background-image';

export type OrdersOfBattleListProps = ConnectedProps<typeof ordersOfBattleListConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.ORDERS_OF_BATTLE>
}

export const OrdersOfBattleList = ({
    ordersOfBattle,
    createOrderOfBattle,
    loadSelectedOrderOfBattle,
    deleteOrderOfBattle,
    navigation
} : OrdersOfBattleListProps) : JSX.Element => {
    const orderOfBattleList = Object.values(ordersOfBattle).sort((a, b) => b.lastAccessed - a.lastAccessed);

    const navigateToOrderOfBattleSummary = (orderOfBattleId : string) : void => {
        loadSelectedOrderOfBattle(orderOfBattleId);
        navigation.push(Screens.ORDER_OF_BATTLE_SUMMARY, {isNew: false});
    };

    const navigateToCrusadeCards = (orderOfBattleId : string) : void => {
        loadSelectedOrderOfBattle(orderOfBattleId);
        navigation.push(Screens.CRUSADE_CARDS);
    };

    const createOrderOfBattleAndNavigate = () : void => {
        createOrderOfBattle();
        navigation.push(Screens.EDIT_ORDER_OF_BATTLE, {isNew: true});
    };

    return (
        <Container>
            <Header />
            <SwipeListWrapper
                data={orderOfBattleList}
                onDelete={(item: OrderOfBattle) => deleteOrderOfBattle(item.id)}
                onInfo={(item: OrderOfBattle) => navigateToOrderOfBattleSummary(item.id)}
                onPress={(item: OrderOfBattle) => navigateToCrusadeCards(item.id)}
                getTitle={(item: OrderOfBattle) => item.title || 'Untitled'}
                getSubtitle={(item: OrderOfBattle) => new Date(item.lastAccessed).toLocaleDateString()}
                imageKey={(item : OrderOfBattle) => item.faction}
            />
            <Footer>
                <FooterTab>
                    <Button
                        full
                        onPress={createOrderOfBattleAndNavigate}
                    >
                        <Text>Create</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};
