import React from 'react';
import {
    Container,
    Header,
    Content,
    Text,
    Button,
    Footer,
    FooterTab,
    Thumbnail,
    Separator
} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {accountSummaryConnector} from './account-summary-connector';
import {imageKeyMap} from '../../assets/images';

export type AccountSummaryProps = ConnectedProps<typeof accountSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.ACCOUNT_SUMMARY>
}


export const AccountSummary : React.FC<AccountSummaryProps> = ({account, navigation}) => {
    const navigateToEditPlayer = () : void => {
        navigation.push(Screens.EDIT_PLAYER, {isNew: false});
    };
    return (
        <Container>
            <Header />
            <Content>
                {account.player.avatarImageUri ? <Thumbnail large source={{uri: account.player.avatarImageUri}}/> : <Thumbnail large source={imageKeyMap[account.player.preferredFaction]}/>}
                <Separator bordered>
                    <Text>Player Name</Text>
                </Separator>
                <Text>{account.player.getPlayerName()}</Text>
                <Separator bordered>
                    <Text>Preferred Faction</Text>
                </Separator>
                <Text>{account.player.preferredFaction}</Text>
                <Separator bordered>
                    <Text>Statistics</Text>
                </Separator>
                <Text>{'Some stats here'}</Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button
                        full
                        onPress={navigateToEditPlayer}
                    >
                        <Text>{'Edit'}</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};
