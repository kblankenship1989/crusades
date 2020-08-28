import React from 'react';
import {ConnectedProps} from 'react-redux';

import {View, ScrollView, Alert} from 'react-native';
import {RequisitionPointsSelector, IncrementorDecrementor} from '../components/requisition-points-selector';
import {orderOfBattleSummaryConnector} from './order-of-battle-summary-connector';
import {FactionPicker} from '../components/faction-picker';
import {factions} from '../types/consts';
import {OrderOfBattle} from '../redux/types/order-of-battle';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '../navigation/root-param-list';
import {Icon, Card, Button} from 'react-native-elements';
import {RequisitionPoints} from '../types/literals';
import {SaveCancelFooter} from '../components/save-cancel-footer';
import {getColorScheme} from '../helpers/getColorScheme';
import {TitleProvider} from '../providers/title-provider';
import {FactionProvider} from '../providers/faction-provider';

type OrderOfBattleSummaryState = OrderOfBattle & {
    isDirty: boolean,
    isEditing: boolean
}

export type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, 'OrderOfBattleSummary'>
};

export class OrderOfBattleSummary extends React.Component<OrderOfBattleSummaryProps, OrderOfBattleSummaryState> {
    constructor(props : OrderOfBattleSummaryProps) {
        super(props);

        this.state = {
            ...props.currentOrderOfBattle,
            isDirty: false,
            isEditing: false
        };
    }

    handleSave = () : void => {
        const {
            isDirty,
            ...currentOrderOfBattle
        } = this.state;
        if (isDirty) {
            this.props.saveCurrentOrderOfBattle(currentOrderOfBattle);

            this.setState({isDirty: false});
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
            isDirty: false
        });
    }

    handleBack = () : void => {
        if (this.state.isDirty) {
            Alert.alert(
                'Save / Discard?',
                'Save changes before navigating away?',
                [
                    {
                        text: 'Discard',
                        onPress: this.resetForm
                    },
                    {
                        text: 'Save',
                        onPress: this.handleSave
                    }
                ],
                {
                    cancelable: true
                }
            );
        }

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

    render() : JSX.Element {
        const colorScheme = getColorScheme();

        return (
            <View>
                <ScrollView>
                    <TitleProvider
                        value={this.state.title}
                        onChangeText={(title) => this.setState({title, isDirty: true})}
                        placeholder={'Order Of Battle'}
                        isEditing={this.state.isEditing}
                    />
                    <FactionProvider
                        selectedFaction={this.state.faction}
                        onValueChange={(itemValue, itemIndex) => this.setState({faction: factions[itemIndex], isDirty: true})}
                    />

                    <RequisitionPointsSelector
                        currentPoints={this.state.requisitionPoints}
                        updateRequisitionPoints={this.updateRequisitionPoints}
                    />
                    <Card
                        title={'Crusade Cards'}
                    >
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
