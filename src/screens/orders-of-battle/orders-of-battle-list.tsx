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
import {ListView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '../../navigation/root-param-list';
import {ordersOfBattleListConnector} from './orders-of-battle-list-connector';
import {OrderOfBattle} from '../../redux/state/order-of-battle';

export type OrdersOfBattleListProps = ConnectedProps<typeof ordersOfBattleListConnector> & {
    navigation: StackNavigationProp<RootParamList, 'OrdersOfBattle'>
}

export const OrdersOfBattleList = ({
    ordersOfBattle,
    createOrderOfBattle,
    loadSelectedOrderOfBattle,
    deleteOrderOfBattle,
    navigation
} : OrdersOfBattleListProps) : JSX.Element => {
    const orderOfBattleList = Object.values(ordersOfBattle).sort((a, b) => b.lastAccessed.getTime() - a.lastAccessed.getTime());

    const dataSource = new ListView.DataSource({
        rowHasChanged: (r1 : OrderOfBattle, r2 : OrderOfBattle) => r1 !== r2
    });

    const navigateToOrderOfBattleSummary = (orderOfBattleId : string) : void => {
        loadSelectedOrderOfBattle(orderOfBattleId);
        navigation.push('OrderOfBattleSummary');
    };

    const createOrderOfBattleAndNavigate = () : void => {
        createOrderOfBattle();
        navigation.push('OrderOfBattleSummary');
    };

    return (
        <Container>
            <Header />
            <Content>
                <List
                    rightOpenValue={-75}
                    dataSource={dataSource.cloneWithRows(orderOfBattleList)}
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
