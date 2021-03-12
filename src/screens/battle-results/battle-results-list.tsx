import React from 'react';
import {
    Container,
    Header,
    Text,
    Button,
    Footer,
    FooterTab
} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {SwipeListWrapper} from '../../components/swipe-list-background-image';
import {ConnectedProps} from 'react-redux';
import {battleResultsListConnector} from './battle-results-list-connector';
import {BattleResults} from '../../redux/state/order-of-battle/battle-results';

export type  BattleResultsListProps = ConnectedProps<typeof battleResultsListConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.ORDERS_OF_BATTLE>
}

export const BattleResultsList = ({
    loadSelectedBattleResult,
    deleteBattleResult,
    createBattleResult,
    battleResults,
    navigation
} : BattleResultsListProps) : JSX.Element => {
    const battleResultsList = Object.values(battleResults).sort((a, b) => b.date - a.date);

    const navigateToBattleResultSummary = (battleResultId : string) : void => {
        loadSelectedBattleResult(battleResultId);
        navigation.push(Screens.BATTLE_RESULT_SUMMARY);
    };

    const createBattleResultAndNavigate = () : void => {
        createBattleResult();
        navigation.push(Screens.EDIT_BATTLE_RESULT, {isNew: true});
    };

    return (
        <Container>
            <Header />
            <SwipeListWrapper
                data={battleResultsList}
                onDelete={(item: BattleResults) => deleteBattleResult(item.id)}
                onPress={(item: BattleResults) => navigateToBattleResultSummary(item.id)}
                getTitle={(item: BattleResults) => item.getTitle()}
                getSubtitle={(item: BattleResults) => item.getDateString()}
                imageKey={(item : BattleResults) => item.enemyFaction}
            />
            <Footer>
                <FooterTab>
                    <Button
                        full
                        onPress={createBattleResultAndNavigate}
                    >
                        <Text>Create</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};
