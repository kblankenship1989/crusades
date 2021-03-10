import React from 'react';
import {Content, Header, Container, Footer, FooterTab, Button, Text, Form} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {editBattleResultConnector} from './edit-battle-result-connector';
import {RouteProp} from '@react-navigation/native';
import {FactionPicker} from '../../components/faction-picker';
import {Factions} from '../../enums';
import {TextInput} from '../../components/text-input';
import {QuantitySelector} from '../../components/quantity-selector';
import {BattleResults} from '../../redux/state/order-of-battle/battle-results';
import {BattleOutcomePicker} from '../../components/battle-outcome-picker';

export type EditBattleResultProps = ConnectedProps<typeof editBattleResultConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.EDIT_BATTLE_RESULT>,
    route: RouteProp<RootParamList, Screens.EDIT_BATTLE_RESULT>
}

type EditBattleResultState = BattleResults & {
    isDirty: boolean,
    isNew: boolean
}

type NumberFields = 'requisitionPoints' | 'supplyLimit'

export class EditBattleResult extends React.Component<EditBattleResultProps, EditBattleResultState> {
    constructor(props: EditBattleResultProps) {
        super(props);

        this.state = {
            ...props.battleResult,
            isDirty: props.route.params.isNew,
            isNew: props.route.params.isNew
        };
    }

    selectFaction = (enemyFaction: Factions) : void => {
        this.setState(prevState => ({
            ...prevState,
            enemyFaction,
            isDirty: true,
            isNew: false
        }));
    }

    setEnemyName = (enemyName: string) : void => {
        this.setState(prevState => ({
            ...prevState,
            enemyName,
            isDirty: true
        }));
    }

    setNumber = (field: NumberFields) => (value: number) : void => {
        this.setState(prevState => ({
            ...prevState,
            [field]: value,
            isDirty: true
        }));
    }

    save = () : void => {
        const {
            isDirty,
            isNew,
            ...battleResult
        } = this.state;

        if (isDirty) {
            this.props.saveBattleResult(this.props.selectedBattleResultId, battleResult);
            this.setState(prevState => ({
                ...prevState,
                isDirty: false,
                isNew: false
            }));

            const newScreen = this.props.route.params.isNew ? Screens.CRUSADE_CARDS : Screens.ORDER_OF_BATTLE_SUMMARY;
            this.props.navigation.replace(newScreen);
        }
    }

    render(): React.ReactNode {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <TextInput
                            label={'Enemy Name'}
                            value={this.state.enemyName}
                            onChangeText={this.setEnemyName}
                        />
                        <FactionPicker
                            selectedFaction={this.state.isNew ? undefined : this.state.enemyFaction}
                            onChange={this.selectFaction}
                            placeholder={'Select Enemy Faction'}
                            title={'Enemy Faction'}
                        />
                        <BattleOutcomePicker
                            selectedBattleOutcome={this.state.isNew ? undefined : this.state.result}
                            onChange={this.selectBattleOutcome}
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
