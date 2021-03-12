import React from 'react';
import {Content, Header, Container, Footer, FooterTab, Button, Text, Separator, H2, ActionSheet} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {battleResultDetailsConnector} from './battle-result-details-connector';

export type BattleResultDetailsProps = ConnectedProps<typeof battleResultDetailsConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.BATTLE_RESULT_SUMMARY>
}

enum ActionList {
    GO_TO_MARKED_UNIT = 'Go To Unit Marked For Greatness',
    EDIT_BATTLE_DETAILS = 'Edit Battle Details',
    DELETE_BATTLE = 'Delete Battle',
    CANCEL = 'Cancel'
}

const actionsOrdered = [
    ActionList.EDIT_BATTLE_DETAILS,
    ActionList.DELETE_BATTLE,
    ActionList.CANCEL
];

export const BattleResultDetails : React.FC<BattleResultDetailsProps> = ({
    navigation,
    battleResult,
    deleteBattleResult,
    loadSelectedBattleResult,
    selectedBattleResultId,
    loadSelectedCrusadeCard,
    crusadeCards
}) => {
    const navigateToEditBattleResult = ():void => {
        navigation.push(Screens.EDIT_BATTLE_RESULT, {isNew: false});
    };

    const deleteCurrentBattleResult = (): void => {
        navigation.pop();
        loadSelectedBattleResult(null);
        deleteBattleResult(selectedBattleResultId);
    };

    const navigateToUnitMarkedForGreatness = ():void => {
        loadSelectedCrusadeCard(battleResult.markedForGreatness as string);
        navigation.push(Screens.CRUSADE_CARD_SUMMARY);
    };

    const onActionSelect = (buttonIndex:number):void => {
        const actionsMap:Record<ActionList, ()=>void> = {
            [ActionList.GO_TO_MARKED_UNIT]: navigateToUnitMarkedForGreatness,
            [ActionList.EDIT_BATTLE_DETAILS]: navigateToEditBattleResult,
            [ActionList.DELETE_BATTLE]: deleteCurrentBattleResult,
            [ActionList.CANCEL]: () => {console.log('canceled');}
        };

        actionsMap[actionsOrdered[buttonIndex]]();
    };

    const openActions = ():void => {
        if (battleResult.markedForGreatness) {
            actionsOrdered.unshift(ActionList.GO_TO_MARKED_UNIT);
        }
        ActionSheet.show({
            options: actionsOrdered,
            cancelButtonIndex: actionsOrdered.length - 1,
            destructiveButtonIndex: actionsOrdered.length - 2,
            title: 'Battle Details Actions'
        }, onActionSelect);
    };

    return (
        <Container>
            <Header />
            <Content>
                <H2>{battleResult.getTitle()}</H2>
                <Separator>
                    <H2>{'Enemy Faction'}</H2>
                </Separator>
                <Text>{battleResult.enemyFaction}</Text>
                <Separator>
                    <H2>{'Battle Result'}</H2>
                </Separator>
                <Text>{battleResult.result}</Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button
                        full
                        onPress={openActions}
                    >
                        <Text>Actions</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};
