import React from 'react';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {accountSummaryConnector} from './account-summary-connector';
import {imageKeyMap} from '../../assets/images';
import {Avatar, Container, Fab, Heading, Icon, Text} from 'native-base';
import {AppHeader} from '../../components/app-header';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export type AccountSummaryProps = ConnectedProps<typeof accountSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.ACCOUNT_SUMMARY>
}


export const AccountSummary : React.FC<AccountSummaryProps> = ({account, navigation}) => {
    const navigateToEditPlayer = () : void => {
        navigation.push(Screens.EDIT_PLAYER, {isNew: false});
    };

    const source = account.player.avatarImageUri ? {uri: account.player.avatarImageUri} : imageKeyMap[account.player.preferredFaction];

    return (
        <Container>
            <AppHeader title={'Account Summary'}/>
            <Avatar size={'lg'} source={source}/>
            <Heading size={'sm'}>{'Player Name'}</Heading>
            <Text>{account.player.getPlayerName()}</Text>
            <Heading size={'sm'}>Preferred Faction</Heading>
            <Text>{account.player.preferredFaction}</Text>
            <Heading size={'sm'}>Statistics</Heading>
            <Text>{'Some stats here'}</Text>
            <Fab
                placement={'bottom-right'}
                onPress={navigateToEditPlayer}>
                <Icon as={<MaterialCommunityIcons name={'pencil'}/>}/>
            </Fab>
        </Container>
    );
};
