import React from 'react';
import {
    Container,
    Header,
    Content,
    Text,
    Button,
    Footer,
    FooterTab,
    Item,
    Label,
    Thumbnail
} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {accountSummaryConnector} from './account-summary-connector';
import {PlayerAccount} from '../../redux/state/player-account';
import {getPlayerName} from '../../redux/state/player';
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
                {account.player.avatarImage ? <Thumbnail large source={account.player.avatarImage}/> : <Thumbnail large source={imageKeyMap[account.player.preferredFaction]}/>}
                <Item fixedLabel>
                    <Label>{'Player Name'}</Label>
                    <Text>{getPlayerName(account.player)}</Text>
                </Item>
                <Item fixedLabel>
                    <Label>{'Preferred Faction'}</Label>
                    <Text>{account.player.preferredFaction}</Text>
                </Item>
                <Item fixedLabel>
                    <Label>{'Stats'}</Label>
                    <Text>{'Some stats here'}</Text>
                </Item>
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
