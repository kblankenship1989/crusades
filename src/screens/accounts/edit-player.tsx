import React from 'react';
import {Container, Header, Content, Form, Footer, FooterTab, Button, Text} from 'native-base';
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
import Player from '../../redux/state/player';

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
            isDirty: props.route.params.isNew,
            isNew: props.route.params.isNew
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
            this.props.saveAccount(this.props.selectedAccountId, {player: this.state.player});
            this.setState({
                isDirty: false,
                isNew: false
            });

            if (this.props.route.params.isNew) {
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
                <Header/>
                <Content>
                    <Form>
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
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            full
                            onPress={this.save}
                            disabled={!this.state.isDirty || !this.isFormValid()}
                        >
                            <Text>Save</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
