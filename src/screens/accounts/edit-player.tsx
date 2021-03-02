import React from 'react';
import {Container, Header, Content, Form, Footer, FooterTab, Button, Text, Item, Label, Input} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {editPlayerConnector} from './edit-player-connector';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {RouteProp} from '@react-navigation/native';
import {Player} from '../../redux/state/player';
import {FactionPicker} from '../../components/faction-picker';
import {Factions} from '../../enums';
import {ImagePickerButton} from '../../components/image-picker-button';
import {imageKeyMap} from '../../assets/images';
import {TextInput} from '../../components/text-input';

export type EditPlayerProps = ConnectedProps<typeof editPlayerConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.EDIT_PLAYER>,
    route: RouteProp<RootParamList, Screens.EDIT_PLAYER>
}

type EditPlayerState = Player & {
    preferredFaction: Factions | null
    isDirty: boolean,
    isNew: boolean
}

type StringFields = 'firstName' | 'lastName' | 'middleName'

export class EditPlayer extends React.Component<EditPlayerProps, EditPlayerState> {
    constructor(props:EditPlayerProps) {
        super(props);
        this.state = {
            ...props.player,
            isDirty: props.route.params.isNew,
            isNew: props.route.params.isNew
        };
    }

    editStringField = (fieldName : StringFields) => (value: string) : void => {
        this.setState(prevState => ({
            ...prevState,
            [fieldName]: value,
            isDirty: true
        }));
    }

    selectFaction = (preferredFaction: Factions) : void => {
        this.setState(prevState => ({
            ...prevState,
            preferredFaction,
            isDirty: true,
            isNew: false
        }));
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
            this.state.firstName,
            this.state.lastName
        ].every((value) => !!value);
    }

    save = () : void => {
        const {
            isDirty,
            isNew,
            ...player
        } = this.state;
        if (this.isFormValid()) {
            this.props.saveAccount(this.props.selectedAccountId, {player});
            this.setState({
                isDirty: false,
                isNew: false
            });

            const newScreen = this.props.route.params.isNew ? Screens.ORDERS_OF_BATTLE : Screens.ACCOUNT_SUMMARY;
            this.props.navigation.replace(newScreen);
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
                            value={this.state.firstName}
                            onChangeText={this.editStringField('firstName').bind(this)}
                            isRequired
                        />
                        <TextInput
                            label={'Middle Name'}
                            value={this.state.middleName}
                            onChangeText={this.editStringField('middleName').bind(this)}
                        />
                        <TextInput
                            label={'Last Name'}
                            value={this.state.lastName}
                            onChangeText={this.editStringField('lastName').bind(this)}
                            isRequired
                        />
                        <FactionPicker
                            selectedFaction={this.state.isNew ? undefined : this.state.preferredFaction}
                            onChange={this.selectFaction}
                            placeholder={'Select Preferred Faction'}
                            title={'Preferred Faction'}
                        />
                        <ImagePickerButton
                            defaultImage={imageKeyMap[this.state.preferredFaction]}
                            imageUri={this.state.avatarImageUri}
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
