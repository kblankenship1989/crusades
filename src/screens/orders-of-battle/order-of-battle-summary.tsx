import React from 'react';
import {Content, Header, Container, Footer, FooterTab, Button, Text, Separator, H2, ActionSheet} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {orderOfBattleSummaryConnector} from './order-of-battle-summary-connector';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {RouteProp} from '@react-navigation/native';

export type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.ORDER_OF_BATTLE_SUMMARY>,
    route: RouteProp<RootParamList, Screens.ORDER_OF_BATTLE_SUMMARY>
}

enum ActionList {
    VIEW_BATTLE_DETAILS = 'View Battle Details',
    EDIT_ORDER_OF_BATTLE = 'Edit Order of Battle',
    DELETE_ORDER_OF_BATTLE = 'Delete Order of Battle',
    CANCEL = 'Cancel'
}

const actionsOrdered = [
    ActionList.VIEW_BATTLE_DETAILS,
    ActionList.EDIT_ORDER_OF_BATTLE,
    ActionList.DELETE_ORDER_OF_BATTLE,
    ActionList.CANCEL
];

export const OrderOfBattleSummary : React.FC<OrderOfBattleSummaryProps> = ({navigation, orderOfBattle, deleteOrderOfBattle, selectedOrderOfBattleId}) => {
    const navigateToEditOrderOfBattle = ():void => {
        navigation.push(Screens.EDIT_ORDER_OF_BATTLE, {isNew: false});
    };

    const deleteCurrentOrderOfBattle = (): void => {
        deleteOrderOfBattle(selectedOrderOfBattleId);
        navigation.pop();
    };

    const navigateToBattleResultsList = ():void => {
        navigation.push(Screens.BATTLE_TALLIES);
    };

    const onActionSelect = (buttonIndex:number):void => {
        const actionsMap:Record<ActionList, ()=>void> = {
            [ActionList.VIEW_BATTLE_DETAILS]: navigateToBattleResultsList,
            [ActionList.EDIT_ORDER_OF_BATTLE]: navigateToEditOrderOfBattle,
            [ActionList.DELETE_ORDER_OF_BATTLE]: deleteCurrentOrderOfBattle,
            [ActionList.CANCEL]: () => {console.log('canceled');}
        };

        actionsMap[actionsOrdered[buttonIndex]];
    };

    const openActions = ():void => {
        ActionSheet.show({
            options: actionsOrdered,
            cancelButtonIndex: actionsOrdered.length - 1,
            destructiveButtonIndex: actionsOrdered.length - 2,
            title: 'Order of Battle Actions'
        }, onActionSelect);
    };

    const getWinLoseDrawString = ():string => {
        const winLoseDrawStats = orderOfBattle.getWinLoseDrawStats();
        return `${winLoseDrawStats.WIN} / ${winLoseDrawStats.LOSE} / ${winLoseDrawStats.DRAW}`;
    };

    return (
        <Container>
            <Header />
            <Content>
                <H2>{orderOfBattle.title || 'Untitled'}</H2>
                <Separator>
                    <H2>{'Faction'}</H2>
                </Separator>
                <Text>{orderOfBattle.faction}</Text>
                <Separator>
                    <H2>{'Requisition Points'}</H2>
                </Separator>
                <Text>{`${orderOfBattle.requisitionPoints} / 5`}</Text>
                <Separator>
                    <H2>{'Supply'}</H2>
                </Separator>
                <Text>{`${orderOfBattle.getSupplyUsed()} / ${orderOfBattle.supplyLimit}`}</Text>
                <Separator>
                    <H2>{'Battle Summary'}</H2>
                    <Text>{'(W / L / D)'}</Text>
                </Separator>
                <Text>{getWinLoseDrawString}</Text>
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
