import React from 'react';
import {Content, Header, Container, Footer, FooterTab, Button, Text, Form} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {editCrusadeCardConnector} from './edit-crusdae-card-connector';
import {RouteProp} from '@react-navigation/native';
import {FactionPicker} from '../../components/faction-picker';
import {Factions} from '../../enums';
import {TextInput} from '../../components/text-input';
import {QuantitySelector} from '../../components/quantity-selector';
import {CrusadeCard} from '../../redux/state/order-of-battle/crusade-card';

export type EditCrusadeCardProps = ConnectedProps<typeof editCrusadeCardConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.EDIT_CRUSADE_CARD>,
    route: RouteProp<RootParamList, Screens.EDIT_CRUSADE_CARD>
}

type EditCrusadeCardState = CrusadeCard & {
    isDirty: boolean,
    isNew: boolean
}

export class EditCrusadeCard extends React.Component<EditCrusadeCardProps, EditCrusadeCardState> {
    constructor(props: EditCrusadeCardProps) {
        super(props);

        this.state = {
            ...props.crusadeCard,
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

    setName = (name: string) : void => {
        this.setState(prevState => ({
            ...prevState,
            name,
            isDirty: true
        }));
    }

    save = () : void => {
        const {
            isDirty,
            isNew,
            ...crusadeCard
        } = this.state;

        if (isDirty) {
            this.props.saveCrusadeCard(this.props.selectedCrusadeCardId, crusadeCard);
            this.setState(prevState => ({
                ...prevState,
                isDirty: false,
                isNew: false
            }));

            this.props.navigation.replace(Screens.CRUSADE_CARD_SUMMARY);
        }
    }

    render(): React.ReactNode {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <TextInput
                            label={'Name'}
                            value={this.state.name}
                            onChangeText={this.setName}
                        />
                        <FactionPicker
                            selectedFaction={this.state.isNew ? undefined : this.state.faction}
                            onChange={this.selectFaction}
                            placeholder={'Select Faction'}
                            title={'Faction'}
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
