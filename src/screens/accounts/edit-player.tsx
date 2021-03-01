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

    save = () : void => {
        const {
            isDirty,
            isNew,
            ...player
        } = this.state;
        if (isDirty) {
            if (!player.preferredFaction) {
                player.preferredFaction = Factions.UNALIGNED;
            }
            this.props.saveAccount(this.props.selectedAccountId, {player});
            this.setState({
                isDirty: false,
                isNew: false
            });
        }

        if (this.props.route.params.isNew) {
            this.props.navigation.navigate(Screens.ORDERS_OF_BATTLE);
        } else {
            this.props.navigation.navigate(Screens.ACCOUNT_SUMMARY);
        }
    }

    render() : React.ReactNode {
        return (
            <Container>
                <Header/>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>First Name</Label>
                            <Input
                                onChangeText={this.editStringField('firstName').bind(this)}
                                value={this.state.firstName}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Middle Name</Label>
                            <Input
                                onChangeText={this.editStringField('middleName').bind(this)}
                                value={this.state.middleName}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Last Name</Label>
                            <Input
                                onChangeText={this.editStringField('lastName').bind(this)}
                                value={this.state.lastName}
                            />
                        </Item>
                        <FactionPicker
                            selectedFaction={this.state.isNew ? undefined : this.state.preferredFaction}
                            onChange={this.selectFaction}
                            placeholder={'Select Preferred Faction'}
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
                            disabled={!this.state.isDirty}
                        >
                            <Text>Save</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
