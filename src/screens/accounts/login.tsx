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
import {loginConnector} from './login-connector';
import {imageKeyMap} from '../../assets/images';
import {getPlayerName} from '../../redux/state/player';
import {ListView} from 'react-native';
import {PlayerAccount} from '../../redux/state/player-account';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';

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
    const accountList = Object.values(accounts).sort((a, b) => b.lastAccessed.getTime() - a.lastAccessed.getTime());

    const dataSource = new ListView.DataSource({
        rowHasChanged: (r1 : PlayerAccount, r2 : PlayerAccount) => r1 !== r2
    });

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
            <Content>
                <List
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    dataSource={dataSource.cloneWithRows(accountList)}
                    renderRow={(account : PlayerAccount) =>
                        <ListItem
                            avatar
                            button
                            onPress={() => navigateToOrdersOfBattle(account.accountId)}
                            key={account.accountId}
                        >
                            <Left>
                                <Thumbnail source={imageKeyMap[account.player.preferredFaction]} />
                            </Left>
                            <Body>
                                <Text>{getPlayerName(account.player)}</Text>
                            </Body>
                            <Right>
                                <Text note>{account.lastAccessed.toLocaleDateString()}</Text>
                            </Right>
                        </ListItem>}
                    renderLeftHiddenRow={(account: PlayerAccount) =>
                        <Button full onPress={() => navigateToAccount(account.accountId)}>
                            <Icon active name="information-circle" />
                        </Button>}
                    renderRightHiddenRow={(account: PlayerAccount) =>
                        <Button full danger onPress={() => deleteAccount(account.accountId)}>
                            <Icon active name="trash" />
                        </Button>}
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
