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
    FooterTab,
    Row
} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {loginConnector} from './login-connector';
import {imageKeyMap} from '../../assets/images';
import {getPlayerName} from '../../redux/state/player';
import {PlayerAccount} from '../../redux/state/player-account';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {SwipeListView} from 'react-native-swipe-list-view';
import {ListRenderItemInfo} from 'react-native';

export type LoginProps = ConnectedProps<typeof loginConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.LOGIN>
}

export const Login = ({
    accounts,
    createAccount,
    loadSelectedAccount,
    deleteAccount,
    navigation
} : LoginProps) : JSX.Element => {
    const accountList = Object.values(accounts).sort((a, b) => new Date(b.lastAccessed).getTime() - new Date(a.lastAccessed).getTime());

    const navigateToAccount = (accountId : string) : void => {
        loadSelectedAccount(accountId);
        navigation.push(Screens.ACCOUNT_SUMMARY);
    };

    const navigateToOrdersOfBattle = (accountId : string) : void => {
        loadSelectedAccount(accountId);
        navigation.push(Screens.ORDERS_OF_BATTLE);
    };

    const createAccountAndNavigate = () : void => {
        createAccount();
        navigation.push(Screens.EDIT_PLAYER, {isNew: true});
    };

    return (
        <Container>
            <Header />
            <Content scrollEnabled={false}>
                <SwipeListView
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    data={accountList}
                    keyExtractor={(account : PlayerAccount) => account.accountId}
                    renderItem={(rowData: ListRenderItemInfo<PlayerAccount>) : JSX.Element =>
                        <ListItem
                            avatar
                            button
                            onPress={() => navigateToOrdersOfBattle(rowData.item.accountId)}
                        >
                            <Left>
                                <Thumbnail source={imageKeyMap[rowData.item.player.preferredFaction]} />
                            </Left>
                            <Body>
                                <Text>{getPlayerName(rowData.item.player)}</Text>
                            </Body>
                            <Right>
                                <Text note>{rowData.item.lastAccessed.toLocaleDateString()}</Text>
                            </Right>
                        </ListItem>}
                    renderHiddenItem={(rowData: ListRenderItemInfo<PlayerAccount>) =>
                        <Row>
                            <Button full onPress={() => navigateToAccount(rowData.item.accountId)}>
                                <Icon active name="information-circle" />
                            </Button>
                            <Button full danger onPress={() => deleteAccount(rowData.item.accountId)}>
                                <Icon active name="trash" />
                            </Button>
                        </Row>}
                />
            </Content>
            <Footer>
                <FooterTab>
                    <Button
                        full
                        onPress={createAccountAndNavigate}
                    >
                        <Text>Create</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};
