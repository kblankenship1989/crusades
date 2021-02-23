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
import {Player} from '../../redux/state/player';
import {ListView} from 'react-native';
import {PlayerAccount} from '../../redux/state/player-account';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '../../navigation/root-param-list';

export type LoginProps = ConnectedProps<typeof loginConnector> & {
    navigation: StackNavigationProp<RootParamList, 'Login'>
}

const getPlayerName = (player : Player) : string => {
    let name = player.firstName;

    if (player.middleName) {
        name += ` ${player.middleName}`;
    }

    name += ` ${player.lastName}`;

    return name;
};

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
        navigation.push('Home');
    };

    const createAccountAndNavigate = () : void => {
        createAccount();
        navigation.push('AddAccount');
    };

    return (
        <Container>
            <Header />
            <Content>
                <List
                    rightOpenValue={-75}
                    dataSource={dataSource.cloneWithRows(accountList)}
                    renderRow={(account : PlayerAccount) =>
                        <ListItem
                            avatar
                            button
                            onPress={() => navigateToAccount(account.accountId)}
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
