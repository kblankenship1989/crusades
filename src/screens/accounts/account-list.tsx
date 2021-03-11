import React from 'react';
import {
    Container,
    Header,
    Text,
    Button,
    Footer,
    FooterTab,
} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {accountListConnector} from './account-list-connector';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {SwipeListWrapper} from '../../components/swipe-list-background-image';
import {PlayerAccount} from '../../redux/state/player-account';

export type AccountListProps = ConnectedProps<typeof accountListConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.ACCOUNT_LIST>
}

export const AccountList = ({
    accounts,
    createAccount,
    loadSelectedAccount,
    deleteAccount,
    navigation
} : AccountListProps) : JSX.Element => {
    const accountList = Object.values(accounts).sort((a, b) => b.lastAccessed - a.lastAccessed);

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
            <SwipeListWrapper
                data={accountList}
                onDelete={(item: PlayerAccount) => deleteAccount(item.id)}
                onInfo={(item: PlayerAccount) => navigateToAccount(item.id)}
                onPress={(item: PlayerAccount) => navigateToOrdersOfBattle(item.id)}
                getTitle={(item: PlayerAccount) => item.player.getPlayerName()}
                getSubtitle={(item: PlayerAccount) => item.getLastAccessedDate()}
                imageKey={item => item.player.preferredFaction}
            />
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
