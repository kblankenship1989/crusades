import React from 'react';
import {View, ScrollView, Text/*, Alert*/} from 'react-native';

import {RequisitionPointsSelector, IncrementorDecrementor} from '../components/requisition-points-selector';
import {factions, BattleOutcomes} from '../types/consts';
import {Icon, Card, Button} from 'react-native-elements';
import {RequisitionPoints} from '../types/literals';
import {SaveCancelFooter} from '../components/save-cancel-footer';
import {getColorScheme} from '../helpers/getColorScheme';
import {TitleFactionProvider} from '../providers/title-faction-provider';
import {SwipeListView} from 'react-native-swipe-list-view';
import {CrusadeCardListItem} from '../components/crusade-card-list-item';
import {SwipeOutDeleteRight} from '../components/swipe-out-delete-right';
import {CrusadeCard} from '../types/state/crusade-card';
import {BattleSummary} from '../components/battle-summary';
import {OrderOfBattleSummaryProps} from '../types/screens/props';
import {OrderOfBattleSummaryState} from '../types/screens/states';

export class OrderOfBattleSummary extends React.Component<OrderOfBattleSummaryProps, OrderOfBattleSummaryState> {
    constructor(props : OrderOfBattleSummaryProps) {
        super(props);

        this.state = {
            ...props.currentOrderOfBattle,
            isDirty: false,
            isEditing: false
        };
    }

    componentDidUpdate(prevProps : OrderOfBattleSummaryProps) : void {
        if (prevProps.currentOrderOfBattle.crusadeCards.length !== this.props.currentOrderOfBattle.crusadeCards.length) {
            this.setState({
                crusadeCards: this.props.currentOrderOfBattle.crusadeCards
            });
        }
    }

    handleSave = () : void => {
        const {
            isDirty,
            ...currentOrderOfBattle
        } = this.state;
        if (isDirty) {
            this.props.saveCurrentOrderOfBattle(currentOrderOfBattle);

            this.setState({
                isEditing: false,
                isDirty: false
            });
        }
    }

    handleEdit = () : void => {
        this.setState({
            isEditing: true
        });
    }

    resetForm = () : void => {
        this.setState({
            ...this.props.currentOrderOfBattle,
            isDirty: false,
            isEditing: false
        });
    }

    handleBack = () : void => {
        // if (this.state.isDirty) {
        //     Alert.alert(
        //         'Save / Discard?',
        //         'Save changes before navigating away?',
        //         [
        //             {
        //                 text: 'Discard',
        //                 onPress: this.resetForm
        //             },
        //             {
        //                 text: 'Save',
        //                 onPress: this.handleSave
        //             }
        //         ],
        //         {
        //             cancelable: true
        //         }
        //     );
        // }

        this.resetForm();

        if (this.props.navigation.canGoBack()) {
            this.props.navigation.goBack();
        }
    }

    updateRequisitionPoints = (change : IncrementorDecrementor) : void => {
        const newValue = this.state.requisitionPoints + change as RequisitionPoints;
        this.setState({
            requisitionPoints: newValue,
            isDirty: true
        });
    }

    selectCrusadeCard = (index : number) : void => {
        this.props.loadCurrentCrusadeCard(index);
        this.props.navigation.push('CrusadeCardSummary');
    }

    getSupplyLimitUsed = () : number => {
        return this.state.crusadeCards.reduce((supplyLimit : number, crusadeCard : CrusadeCard) : number => {
            return supplyLimit + crusadeCard.powerRating;
        }, 0);
    }

    addBattleTally = (newBattleTally : BattleOutcomes) : void => {
        this.setState({
            battleTally: [
                ...this.state.battleTally,
                newBattleTally
            ],
            isDirty: true
        });
    }

    render() : JSX.Element {
        const colorScheme = getColorScheme();

        return (
            <View>
                <ScrollView>
                    <TitleFactionProvider
                        title={this.state.title}
                        onTitleChange={(title) => this.setState({title, isDirty: true})}
                        onFactionChange={(itemValue, itemIndex) => this.setState({faction: factions[itemIndex], isDirty: true})}
                        selectedFaction={this.state.faction}
                        placeholder={'Order Of Battle'}
                        isEditing={this.state.isEditing}
                    />
                    {!this.state.isEditing && <Icon
                        name={'pencil'}
                        type={'font-awesome'}
                        size={18}
                        color={'#8ba4c9'}
                        testID={'edit-title'}
                        onPress={() => this.handleEdit()}
                    />}
                    <RequisitionPointsSelector
                        currentPoints={this.state.requisitionPoints}
                        updateRequisitionPoints={this.updateRequisitionPoints}
                    />
                    <BattleSummary
                        battleTallies={this.state.battleTally}
                        addBattleTally={this.addBattleTally}
                    />
                    <Card
                        title={'Crusade Cards'}
                    >
                        <View>
                            <Text>Supply Limit Used</Text>
                            <Text>{this.getSupplyLimitUsed()}</Text>
                            <Text>Supply Limit</Text>
                            <Text>{this.state.supplyLimit}</Text>
                        </View>
                        <SwipeListView
                            renderItem={CrusadeCardListItem({selectCrusadeCard: this.selectCrusadeCard})}
                            renderHiddenItem={SwipeOutDeleteRight({onDelete: this.props.deleteCrusadeCard})}
                            keyExtractor={(orderOfBattle) => orderOfBattle.title}
                            data={this.state.crusadeCards}
                            rightOpenValue={-75}
                        />
                        <Button
                            onPress={this.props.addCrusadeCard}
                            testID={'add-crusade-card'}
                            icon={<Icon
                                name={'plus'}
                                type={'font-awesome'}
                                size={18}
                                color={colorScheme === 'light' ? '#8ba4c9' : '#404040'}
                            />}
                        />
                    </Card>
                </ScrollView>
                <SaveCancelFooter
                    isDirty={this.state.isDirty}
                    onCancel={this.handleBack}
                    onSave={this.handleSave}
                />
            </View>
        );
    }
}
