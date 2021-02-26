import React from 'react';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Text,
    Button,
    Icon,
    Footer,
    FooterTab
} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {imageKeyMap} from '../../assets/images';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {ordersOfBattleListConnector} from './orders-of-battle-list-connector';
import {OrderOfBattle} from '../../redux/state/order-of-battle';

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
    const orderOfBattleList = Object.values(ordersOfBattle).sort((a, b) => b.lastAccessed.getTime() - a.lastAccessed.getTime());

    const navigateToOrderOfBattleSummary = (orderOfBattleId : string) : void => {
        loadSelectedOrderOfBattle(orderOfBattleId);
        // navigation.push(Screens.ORDER_OF_BATTLE_SUMMARY);
    };

    const createOrderOfBattleAndNavigate = () : void => {
        createOrderOfBattle();
        // navigation.push(Screens.ORDER_OF_BATTLE_SUMMARY);
    };

    return (
        <Container>
            <Header />
            <Content>
                <List
                    rightOpenValue={-75}
                    dataArray={orderOfBattleList}
                    keyExtractor={(orderOfBattle : OrderOfBattle) => orderOfBattle.id}
                    renderRow={(orderOfBattle : OrderOfBattle) =>
                        <ListItem
                            avatar
                            button
                            onPress={() => navigateToOrderOfBattleSummary(orderOfBattle.id)}
                            key={orderOfBattle.id}
                        >
                            <Left>
                                <Thumbnail source={imageKeyMap[orderOfBattle.faction]} />
                            </Left>
                            <Body>
                                <Text>{orderOfBattle.title || 'Untitled'}</Text>
                            </Body>
                            <Right>
                                <Text note>{orderOfBattle.lastAccessed.toLocaleDateString()}</Text>
                            </Right>
                        </ListItem>}
                    renderRightHiddenRow={(orderOfBattle: OrderOfBattle) =>
                        <Button full danger onPress={() => deleteOrderOfBattle(orderOfBattle.id)}>
                            <Icon active name="trash" />
                        </Button>}
                />
            </Content>
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
