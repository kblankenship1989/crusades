import React from 'react';
import {Content, Header, Container, Footer, FooterTab, Button, Text, Form, Item, Label} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {editOrderOfBattleConnector} from './edit-order-of-battle-connector';
import {RouteProp} from '@react-navigation/native';
import {OrderOfBattle} from '../../redux/state/order-of-battle';
import {FactionPicker} from '../../components/faction-picker';
import {Factions} from '../../enums';
import {TextInput} from '../../components/text-input';

export type EditOrderOfBattleProps = ConnectedProps<typeof editOrderOfBattleConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.EDIT_ORDER_OF_BATTLE>,
    route: RouteProp<RootParamList, Screens.EDIT_ORDER_OF_BATTLE>
}

type EditOrderOfBattleState = OrderOfBattle & {
    isDirty: boolean,
    isNew: boolean
}

export class EditOrderOfBattle extends React.Component<EditOrderOfBattleProps, EditOrderOfBattleState> {
    constructor(props: EditOrderOfBattleProps) {
        super(props);

        this.state = {
            ...props.orderOfBattle,
            isDirty: props.route.params.isNew,
            isNew: props.route.params.isNew
        };
    }

    selectFaction = (preferredFaction: Factions) : void => {
        this.setState(prevState => ({
            ...prevState,
            preferredFaction,
            isDirty: true,
            isNew: false
        }));
    }

    setTitle = (title: string) : void => {
        this.setState(prevState => ({
            ...prevState,
            title,
            isDirty: true
        }));
    }

    save = () : void => {
        const {
            isDirty,
            isNew,
            ...orderOfBattle
        } = this.state;

        if (isDirty) {
            this.props.saveOrderOfBattle(this.props.selectedOrderOfBattleId, orderOfBattle);
            this.setState(prevState => ({
                ...prevState,
                isDirty: false,
                isNew: false
            }));
        }
    }

    render(): React.ReactNode {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <TextInput
                            label={'Title'}
                            value={this.state.title}
                            onChangeText={this.setTitle}
                        />
                        <FactionPicker
                            selectedFaction={this.state.isNew ? undefined : this.state.faction}
                            onChange={this.selectFaction}
                            placeholder={'Select Faction'}
                        />
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            full
                            onPress={this.save}
                        >
                            <Text>Save</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
