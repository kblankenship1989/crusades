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
import {Divider, Text} from 'react-native-elements';
import {BattleOutcomes, Factions} from '../types/enums';
import {Button} from 'react-native';
import {RouteProp} from '@react-navigation/native';

type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, 'OrderOfBattleSummary'>,
    route: RouteProp<RootParamList, 'OrderOfBattleSummary'>
}

type OrderOfBattleSummaryState = OrderOfBattle & {
    isDirty: boolean
}

type WinLoseDraw = 'WIN' | 'LOSE' | 'DRAW';

const WinLoseDrawMap : Record<BattleOutcomes, WinLoseDraw> = {
    [BattleOutcomes.TABLED]: 'LOSE',
    [BattleOutcomes.MAJOR_LOSS]: 'LOSE',
    [BattleOutcomes.MINOR_LOSS]: 'LOSE',
    [BattleOutcomes.DRAW]: 'DRAW',
    [BattleOutcomes.MINOR_VICTORY]: 'WIN',
    [BattleOutcomes.MAJOR_VICTORY]: 'WIN',
    [BattleOutcomes.ANNIHALATION]: 'WIN'
};

export class OrderOfBattleSummary extends React.Component<OrderOfBattleSummaryProps, OrderOfBattleSummaryState> {
    constructor(props: OrderOfBattleSummaryProps) {
        super(props);

        this.state = {
            ...props.currentOrderOfBattle,
            isDirty: false
        };
    }

    componentDidUpdate(prevProps: OrderOfBattleSummaryProps, prevState: OrderOfBattleSummaryState) : void {
        if (this.props.route.params.updatedBattleResults && prevState.battleTally !== this.props.route.params.updatedBattleResults) {
            this.setBattleTally(this.props.route.params.updatedBattleResults);
        }
    }

    save = () : void => {
        const {
            isDirty,
            ...updatedOrderOfBattle
        } = this.state;

        this.props.saveCurrentOrderOfBattle(updatedOrderOfBattle);

        this.setState({
            isDirty: false
        });
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

    navigateToBattleSummary = () : void => {
        this.props.navigation.push('BattleSummary', {
            battleResults: this.state.battleTally,
        });
    };

    getWinLoseDrawCounts = () : string => {
        const wldCounts : Record<WinLoseDraw, number> = this.state.battleTally.reduce((counts, battleResult) => {
            counts[WinLoseDrawMap[battleResult.result]]++;

            return counts;
        }, {
            WIN: 0,
            LOSE: 0,
            DRAW: 0
        });

        return `${wldCounts.WIN} / ${wldCounts.LOSE} / ${wldCounts.DRAW}`;
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
                        <Divider/>
                        <Text h3>Battle Summary (W/L/D)</Text>
                        <Button
                            title={this.getWinLoseDrawCounts()}
                            onPress={this.navigateToBattleSummary}
                        />
                    </ScrollView>
                </BackgroundImageContainer>
            </ActionFixedFooterContainer>
        );
    }
}
