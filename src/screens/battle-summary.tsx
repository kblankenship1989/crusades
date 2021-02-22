import React from 'react';
import {Button, FlatList, ListRenderItem, View} from 'react-native';
import {Divider, Text} from 'react-native-elements';
import {StackNavigationProp,} from '@react-navigation/stack';

import {ActionFixedFooterContainer} from '../containers/action-fixed-footer-container';
import {BackgroundImageListItem} from '../components/background-image-list-item';
import {defaultBattleResults} from '../redux/state/order-of-battle/battle-results';
import {BattleOutcomes, Factions} from '../enums';
import {FactionPicker} from '../components/faction-picker';
import {BattleOutcomePicker} from '../components/battle-outcome-picker';
import {RouteProp} from '@react-navigation/native';

export type BattleSummaryProps = {
    navigation: StackNavigationProp<RootParamList, 'BattleSummary'>
    route: RouteProp<RootParamList, 'BattleSummary'>
}

type BattleSummaryState = BattleResults & {
    currentResults: BattleResults[],
    isDirty: boolean,
    isNewEntryDirty: boolean
}

export class BattleSummary extends React.Component<BattleSummaryProps, BattleSummaryState> {
    constructor(props : BattleSummaryProps) {
        super(props);

        this.state = {
            ...defaultBattleResults,
            currentResults: props.route.params.battleResults,
            isDirty: false,
            isNewEntryDirty: false
        };
    }

    onSave = () : void => {
        this.props.navigation.navigate('OrderOfBattleSummary', {
            updatedBattleResults: this.state.currentResults
        });
    }

    selectEnemyFaction = (enemyFaction: Factions) : void => {
        this.setState({
            enemyFaction,
            isNewEntryDirty: true
        });
    }

    selectResult = (result: BattleOutcomes) : void => {
        this.setState({
            result,
            isNewEntryDirty: true
        });
    }

    removeBattleResult = (index: number) : void => {
        const newCurrentResults = [...this.state?.currentResults];
        newCurrentResults.splice(index,1);
        this.setState({
            currentResults: newCurrentResults,
            ...defaultBattleResults,
            isDirty: true
        });
    }

    addCurrentResult = () : void => {
        const newBattleResult : BattleResults = {
            enemyFaction: this.state.enemyFaction,
            date: new Date().toLocaleDateString(),
            result: this.state.result,
            markedForGreatness: this.state.markedForGreatness
        };

        const newCurrentResults = [...this.state?.currentResults];
        newCurrentResults.unshift(newBattleResult);

        this.setState({
            currentResults: newCurrentResults,
            ...defaultBattleResults,
            isDirty: true,
            isNewEntryDirty: false
        });
    }

    renderListItem : ListRenderItem<BattleResults> = ({item, index}) => {
        const title = `${item.enemyFaction} - ${item.result} (${item.date})`;

        return (
            <BackgroundImageListItem
                index={index}
                title={title}
                imageKey={item.enemyFaction}
                onDelete={this.removeBattleResult}
            />
        );
    };

    render() : React.ReactNode {
        return (
            <ActionFixedFooterContainer
                isDirty={this.state.isDirty}
                onSave={this.onSave}
            >
                <View>
                    <FactionPicker
                        selectedFaction={this.state.enemyFaction}
                        onChange={this.selectEnemyFaction}
                        title={'Enemy Faction'}
                    />
                    <BattleOutcomePicker
                        selectedBattleOutcome={this.state.result}
                        onChange={this.selectResult}
                    />
                    <Text h4>{'Mark For Greatness'}</Text>
                    <Button
                        title={'+ ADD'}
                        onPress={this.addCurrentResult}
                    />
                </View>
                <Divider/>
                <FlatList
                    ListHeaderComponent={<Text h3>{'Previous Battles'}</Text>}
                    renderItem={this.renderListItem}
                    keyExtractor={(battleResults, index) => index.toString()}
                    data={this.state.currentResults}
                />
            </ActionFixedFooterContainer>
        );
    }
}
