import React from 'react';
import {Container, Fab, Icon, Stack} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {editPlayerConnector} from './edit-player-connector';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {RouteProp} from '@react-navigation/native';
import {FactionPicker} from '../../components/faction-picker';
import {Factions} from '../../enums';
import {ImagePickerButton} from '../../components/image-picker-button';
import {imageKeyMap} from '../../assets/images';
import {TextInput} from '../../components/text-input';
import {Player} from '../../redux/state/player';
import {AppHeader} from '../../components/app-header';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

export type EditPlayerProps = ConnectedProps<typeof editPlayerConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.EDIT_PLAYER>,
    route: RouteProp<RootParamList, Screens.EDIT_PLAYER>
}

type EditPlayerState = {
    player: Player
    isDirty: boolean
    isNew: boolean
}

type StringFields = 'firstName' | 'lastName' | 'middleName'

export class EditPlayer extends React.Component<EditPlayerProps, EditPlayerState> {
    constructor(props:EditPlayerProps) {
        super(props);
        this.state = {
            player: props.player,
            isDirty: props.route?.params?.isNew ?? true,
            isNew: props.route?.params?.isNew ?? true
        };
    }

    editStringField = (fieldName : StringFields) => (value: string) : void => {
        const player: Player = this.state.player;

        player[fieldName] = value;

        this.setState({
            player,
            isDirty: true
        });
    }

    selectFaction = (preferredFaction: Factions) : void => {
        const player = this.state.player;

        player.preferredFaction = preferredFaction;
        this.setState({
            player,
            isDirty: true,
            isNew: false
        });
    }

    selectAvatarImage = (avatarImageUri: string) : void => {
        this.setState(prevState => ({
            ...prevState,
            avatarImageUri,
            isDirty: true
        }));
    }

    isFormValid = () : boolean => {
        return [
            this.state.player.firstName,
            this.state.player.lastName
        ].every((value) => !!value);
    }

    save = () : void => {
        if (this.isFormValid()) {
            this.props.saveAccount({player: this.state.player});
            const isNew = this.state.isNew;
            this.setState({
                isDirty: false,
                isNew: false
            });

            if (isNew) {
                this.props.navigation.replace(Screens.ORDERS_OF_BATTLE);
            } else {
                this.props.navigation.pop();
            }
        } else {
            alert('One or more required fields are missing.');
        }
    }

    render() : React.ReactNode {
        return (
            <Container>
                <AppHeader
                    title={'Edit Account'}
                />
                <Stack space={4} w={'80%'}>
                    <TextInput
                        label={'First Name'}
                        value={this.state.player.firstName}
                        onChangeText={this.editStringField('firstName').bind(this)}
                        isRequired
                    />
                    <TextInput
                        label={'Middle Name'}
                        value={this.state.player.middleName}
                        onChangeText={this.editStringField('middleName').bind(this)}
                    />
                    <TextInput
                        label={'Last Name'}
                        value={this.state.player.lastName}
                        onChangeText={this.editStringField('lastName').bind(this)}
                        isRequired
                    />
                    <FactionPicker
                        selectedFaction={this.state.isNew ? undefined : this.state.player.preferredFaction}
                        onChange={this.selectFaction}
                        placeholder={'Select Preferred Faction'}
                        title={'Preferred Faction'}
                    />
                    <ImagePickerButton
                        defaultImage={imageKeyMap[this.state.player.preferredFaction]}
                        imageUri={this.state.player.avatarImageUri}
                        onImageSelect={this.selectAvatarImage}
                        title={'Select Avatar Image'}
                    />
                </Stack>
                <Fab
                    placement={'bottom-right'}
                    onPress={this.save}>
                    <Icon as={<MaterialCommunityIcons name={'content-save'}/>}/>
                </Fab>
            </Container>
        );
    }
}
