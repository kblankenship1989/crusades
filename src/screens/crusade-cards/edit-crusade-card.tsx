import React from 'react';
import {Content, Header, Container, Footer, FooterTab, Button, Text, Form} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {editCrusadeCardConnector} from './edit-crusade-card-connector';
import {RouteProp} from '@react-navigation/native';
import {FactionPicker} from '../../components/faction-picker';
import {Factions, BattlefieldRoles} from '../../enums';
import {TextInput} from '../../components/text-input';
import {QuantitySelector} from '../../components/quantity-selector';
import {CrusadeCard} from '../../redux/state/order-of-battle/crusade-card';
import {BattlefieldRolePicker} from '../../components/battlefield-role-picker';

export type EditCrusadeCardProps = ConnectedProps<typeof editCrusadeCardConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.EDIT_CRUSADE_CARD>,
    route: RouteProp<RootParamList, Screens.EDIT_CRUSADE_CARD>
}

type EditCrusadeCardState = CrusadeCard & {
    isDirty: boolean
}

export class EditCrusadeCard extends React.Component<EditCrusadeCardProps, EditCrusadeCardState> {
    constructor(props: EditCrusadeCardProps) {
        super(props);

        this.state = {
            ...props.crusadeCard,
            isDirty: props.route.params.isNew
        };
    }

    selectFaction = (faction: Factions) : void => {
        this.setState(prevState => ({
            ...prevState,
            faction,
            isDirty: true
        }));
    }

    selectBattlefieldRole = (battlefieldRole: BattlefieldRoles) : void => {
        this.setState(prevState => ({
            ...prevState,
            battlefieldRole,
            isDirty: true
        }));
    }

    setName = (name: string) : void => {
        this.setState(prevState => ({
            ...prevState,
            name,
            isDirty: true
        }));
    }

    setUnit = (unit: string) : void => {
        this.setState(prevState => ({
            ...prevState,
            unit,
            isDirty: true
        }));
    }

    setPowerRating = (powerRating: number) : void => {
        this.setState(prevState => ({
            ...prevState,
            powerRating,
            isDirty: true
        }));
    }

    save = () : void => {
        const {
            isDirty,
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

    isFormValid = () : boolean => {
        return [
            this.state.unit
        ].every((value) => !!value);
    }

    render(): React.ReactNode {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <TextInput
                            label={'Unit Description'}
                            value={this.state.unit}
                            onChangeText={this.setUnit}
                            isRequired
                        />
                        <TextInput
                            label={'Name'}
                            value={this.state.name}
                            onChangeText={this.setName}
                        />
                        <FactionPicker
                            selectedFaction={this.state.faction}
                            onChange={this.selectFaction}
                            placeholder={'Select Faction'}
                            title={'Faction'}
                        />
                        <BattlefieldRolePicker
                            selectedRole={this.state.battlefieldRole}
                            onChange={this.selectBattlefieldRole}
                            placeholder={'Select Faction'}
                            title={'Faction'}
                        />
                        <QuantitySelector
                            title={'Power Rating'}
                            min={1}
                            max={50}
                            multiplier={1}
                            selectedValue={this.state.powerRating}
                            onQuantityChange={this.setPowerRating}
                        />
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            full
                            onPress={this.save}
                            disabled={!this.isFormValid()}
                        >
                            <Text>Save</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
