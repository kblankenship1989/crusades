import React from 'react';
import {Content, Header, Container, Footer, FooterTab, Button, Text, Form} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {editBattleResultConnector} from './edit-battle-result-connector';
import {RouteProp} from '@react-navigation/native';
import {FactionPicker} from '../../components/faction-picker';
import {Factions, BattleOutcomes} from '../../enums';
import {TextInput} from '../../components/text-input';
import {BattleResults} from '../../redux/state/order-of-battle/battle-results';
import {BattleOutcomePicker} from '../../components/battle-outcome-picker';
import {PickerItem, Picker} from '../../components/picker';
import {CrusadeCard} from '../../redux/state/order-of-battle/crusade-card';

export type EditBattleResultProps = ConnectedProps<typeof editBattleResultConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.EDIT_BATTLE_RESULT>,
    route: RouteProp<RootParamList, Screens.EDIT_BATTLE_RESULT>
}

type EditBattleResultState = BattleResults & {
    isDirty: boolean,
    isBattleOutcomeSelected: boolean,
    isEnemyFactionSelected: boolean,
    unitsToMarkForGreatness: PickerItem<string>[]
}

type NumberFields = 'requisitionPoints' | 'supplyLimit'

export class EditBattleResult extends React.Component<EditBattleResultProps, EditBattleResultState> {
    constructor(props: EditBattleResultProps) {
        super(props);

        this.state = {
            ...props.battleResult,
            isDirty: props.route.params.isNew,
            isBattleOutcomeSelected: !props.route.params.isNew,
            isEnemyFactionSelected: !props.route.params.isNew,
            unitsToMarkForGreatness: this.getUnitsToMarkForGreatness(props.crusadeCards)
        };
    }

    selectFaction = (enemyFaction: Factions) : void => {
        this.setState(prevState => ({
            ...prevState,
            enemyFaction,
            isDirty: true,
            isEnemyFactionSelected: true
        }));
    }

    selectBattleOutcome = (result: BattleOutcomes) : void => {
        this.setState(prevState => ({
            ...prevState,
            result,
            isDirty: true,
            isBattleOutcomeSelected: true
        }));
    }

    selectMarkedForGreatness = (crusadeCardId: string) : void => {
        this.setState(prevState => ({
            ...prevState,
            isDirty: true,
            markedForGreatness: crusadeCardId
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
            isBattleOutcomeSelected,
            isEnemyFactionSelected,
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

    getUnitsToMarkForGreatness = (crusadeCards: Record<string, CrusadeCard>) : PickerItem<string>[] => {
        return Object.entries(crusadeCards)
            .filter((entry) => entry[1].selected)
            .map((entry) : PickerItem<string> => ({
                key: entry[0],
                value: entry[0],
                label: entry[1].getDisplayName()
            }));
    }

    render(): React.ReactNode {
        return (
            <Container>

                <Header />
                <Content>
                    <Form>
                        <TextInput
                            label={'Enemy Name'}
                            value={this.state.opponent.name}
                            onChangeText={this.setEnemyName}
                        />
                        <FactionPicker
                            selectedFaction={this.state.isEnemyFactionSelected ? this.state.opponent.faction : undefined}
                            onChange={this.selectFaction}
                            placeholder={'Select Enemy Faction'}
                            title={'Enemy Faction'}
                        />
                        <BattleOutcomePicker
                            selectedBattleOutcome={this.state.isBattleOutcomeSelected ? this.state.result : undefined}
                            onChange={this.selectBattleOutcome}
                        />
                        <Picker
                            placeholder={'Select Unit'}
                            items={this.state.unitsToMarkForGreatness}
                            onChange={this.selectMarkedForGreatness}
                            selectedValue={this.state.markedForGreatness}
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
