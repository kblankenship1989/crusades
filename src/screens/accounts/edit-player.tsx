import React from 'react';
import {Container, Header, Content, Form, Footer, FooterTab, Button, Text, Item} from 'native-base';
import {PlayerAccount} from '../../redux/state/player-account';
import {ConnectedProps} from 'react-redux';
import {editPlayerConnector} from './edit-player-connector';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {RouteProp} from '@react-navigation/native';

export type EditPlayerProps = ConnectedProps<typeof editPlayerConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.EDIT_PLAYER>,
    route: RouteProp<RootParamList, Screens.EDIT_PLAYER>
}

type EditPlayerState = Partial<PlayerAccount> & {
    isDirty: boolean
}

export class EditPlayer extends React.Component<EditPlayerProps, EditPlayerState> {
    constructor(props:EditPlayerProps) {
        super(props);
        this.state = {
            player: props.player,
            isDirty: props.route.params.isNew
        };
    }

    save = () : void => {
        const {
            isDirty,
            player
        } = this.state;
        if (isDirty) {
            this.props.saveAccount(this.props.selectedAccountId, {player});
            this.setState({
                isDirty: false
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
                        <Item>

                        </Item>
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
