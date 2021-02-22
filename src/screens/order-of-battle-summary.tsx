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
import {RouteProp} from '@react-navigation/native';
import {BattleSummaryButton} from '../components/battle-summary-button';

type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, 'OrderOfBattleSummary'>,
    route: RouteProp<RootParamList, 'OrderOfBattleSummary'>
}

type OrderOfBattleSummaryState = OrderOfBattle & {
    isDirty: boolean
}

export class OrderOfBattleSummary extends React.Component<OrderOfBattleSummaryProps, OrderOfBattleSummaryState> {
    constructor(props: OrderOfBattleSummaryProps) {
        super(props);

        this.state = {
            ...props.currentOrderOfBattle,
            isDirty: false
        };
    }

    componentDidUpdate(prevProps: OrderOfBattleSummaryProps, prevState: OrderOfBattleSummaryState) : void {
        if (this.props.route.params?.updatedBattleResults && prevState.battleTally !== this.props.route.params.updatedBattleResults) {
            this.setBattleTally(this.props.route.params.updatedBattleResults);
        }
    }

    save = () : void => {
        const {
            isDirty,
            ...updatedOrderOfBattle
        } = this.state;

        if (isDirty) {
            this.props.saveCurrentOrderOfBattle(updatedOrderOfBattle);

            this.setState({
                isDirty: false
            });
        }
    };

    setTitle = (title: string) : void => {
        this.setState({
            title,
            isDirty: true
        });
    }

    setRequisitionPoints = (requisitionPoints: number) : void => {
        this.setState({
            requisitionPoints,
            isDirty: true
        });
    }

    setFaction = (faction: Factions) : void => {
        this.setState({
            faction,
            isDirty: true
        });
    }

    setBattleTally = (battleTally: BattleResults[]) : void => {
        this.setState({
            battleTally,
            isDirty: true
        });
    }

    render() : React.ReactNode {
        const {isDirty, title, faction, requisitionPoints} = this.state;

        return (
            <ActionFixedFooterContainer
                isDirty={isDirty}
                onSave={this.save}
            >
                <BackgroundImageContainer
                    imageKey={faction}
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
                        <Divider/>
                        <BattleSummaryButton
                            battleTally={this.state.battleTally}
                        />
                    </ScrollView>
                </BackgroundImageContainer>
            </ActionFixedFooterContainer>
        );
    }
}
