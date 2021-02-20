import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {FactionPicker} from '../components/faction-picker';
import {RequisitionPointsSelector} from '../components/requisition-points-selector';
import {TitleInput} from '../components/title-input';
import {ActionFixedFooterContainer} from '../containers/action-fixed-footer-container';
import {StackNavigationProp} from '@react-navigation/stack';
import {ConnectedProps} from 'react-redux';
import {orderOfBattleSummaryConnector} from './order-of-battle-summary-connector';
import {BackgroundImageContainer} from '../containers/background-image-container';
import {Divider} from 'react-native-elements';
import {Factions} from '../types/enums';

type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, 'OrderOfBattleSummary'>
}

type OrderOfBattleSummaryState = {
    title?: string,
    faction: Factions,
    requisitionPoints: number,
    isDirty: boolean
}

export class OrderOfBattleSummary extends React.Component<OrderOfBattleSummaryProps, OrderOfBattleSummaryState> {
    constructor(props: OrderOfBattleSummaryProps) {
        super(props);

        this.state = {
            title: props.currentOrderOfBattle.title,
            faction: props.currentOrderOfBattle.faction,
            requisitionPoints: props.currentOrderOfBattle.requisitionPoints,
            isDirty: false
        };
    }

    save = () => {
        const {
            title,
            faction,
            requisitionPoints
        } = this.state;

        this.props.saveCurrentOrderOfBattle({
            title,
            faction,
            requisitionPoints
        });

        this.setState({
            isDirty: false
        });
    };

    setTitle = (title: string) => {
        this.setState({
            title,
            isDirty: true
        });
    }

    setRequisitionPoints = (requisitionPoints: number) => {
        this.setState({
            requisitionPoints,
            isDirty: true
        });
    }

    setFaction = (faction: Factions) => {
        this.setState({
            faction,
            isDirty: true
        });
    }

    render() {
        const {isDirty, title, faction, requisitionPoints} = this.state;

        return (
            <ActionFixedFooterContainer
                isDirty={isDirty}
                onSave={this.save}
            >
                <BackgroundImageContainer
                    imageKey={faction}
                    containerStyle={{flex: 1}}
                >
                    <ScrollView>
                        <TitleInput
                            value={title}
                            placeholder={'Order Of Battle'}
                            onChangeText={this.setTitle}
                        />
                        <Divider/>
                        <FactionPicker
                            selectedFaction={faction}
                            onChange={this.setFaction}
                        />
                        <Divider/>
                        <RequisitionPointsSelector
                            currentPoints={requisitionPoints}
                            onChange={this.setRequisitionPoints}
                        />
                    </ScrollView>
                </BackgroundImageContainer>
            </ActionFixedFooterContainer>
        );
    }
}
