import React from 'react';
import {ConnectedProps} from 'react-redux';
import {orderOfBattleSummaryConnector} from './order-of-battle-summary-connector';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Container, Fab, Icon, Actionsheet, Heading, Text} from 'native-base';
import {AppHeader} from '../../components/app-header';

export type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.ORDER_OF_BATTLE_SUMMARY>
}

enum ActionList {
    VIEW_BATTLE_DETAILS = 'View Battle Details',
    EDIT_ORDER_OF_BATTLE = 'Edit Order of Battle',
    DELETE_ORDER_OF_BATTLE = 'Delete Order of Battle'
}

const actionsOrdered = [
    ActionList.VIEW_BATTLE_DETAILS,
    ActionList.EDIT_ORDER_OF_BATTLE,
    ActionList.DELETE_ORDER_OF_BATTLE
];

export const OrderOfBattleSummary : React.FC<OrderOfBattleSummaryProps> = ({
    navigation,
    orderOfBattle,
    deleteOrderOfBattle,
    loadSelectedOrderOfBattle,
    selectedOrderOfBattleId
}) => {
    const [isActionSheetOpen, setActionSheetOpen] = React.useState(false);

    const navigateToEditOrderOfBattle = ():void => {
        navigation.push(Screens.EDIT_ORDER_OF_BATTLE, {isNew: false});
    };

    const deleteCurrentOrderOfBattle = (): void => {
        navigation.pop();
        loadSelectedOrderOfBattle(null);
        deleteOrderOfBattle(selectedOrderOfBattleId);
    };

    const navigateToBattleResultsList = ():void => {
        navigation.push(Screens.BATTLE_RESULTS);
    };

    const actionsMap:Record<ActionList, ()=>void> = {
        [ActionList.VIEW_BATTLE_DETAILS]: navigateToBattleResultsList,
        [ActionList.EDIT_ORDER_OF_BATTLE]: navigateToEditOrderOfBattle,
        [ActionList.DELETE_ORDER_OF_BATTLE]: deleteCurrentOrderOfBattle
    };

    const getWinLoseDrawString = ():string => {
        const winLoseDrawStats = orderOfBattle.getWinLoseDrawStats();
        return `${winLoseDrawStats.WIN} / ${winLoseDrawStats.LOSE} / ${winLoseDrawStats.DRAW}`;
    };

    return (
        <Container>
            <AppHeader title={'Order of Battle Summary'} />
            <Heading size={'sm'}>{orderOfBattle.title || 'Untitled'}</Heading>
            <Heading size={'sm'}>{'Faction'}</Heading>
            <Text>{orderOfBattle.faction}</Text>
            <Heading size={'sm'}>{'Requisition Points'}</Heading>
            <Text>{`${orderOfBattle.requisitionPoints} / 5`}</Text>
            <Heading size={'sm'}>{'Supply'}</Heading>
            <Text>{`${orderOfBattle.getSupplyUsed()} / ${orderOfBattle.supplyLimit}`}</Text>
            <Heading size={'sm'}>{'Battle Summary'}</Heading>
            <Heading size={'xs'}>{'(W / L / D)'}</Heading>
            <Text>{getWinLoseDrawString()}</Text>
            <Fab
                placement={'bottom-right'}
                onPress={() => setActionSheetOpen(true)}>
                <Icon as={<MaterialCommunityIcons name={'arrow-up'}/>}/>
            </Fab>

            <Actionsheet isOpen={isActionSheetOpen} onClose={() => setActionSheetOpen(false)}>
                <Actionsheet.Content>
                    {actionsOrdered.map((action) => (
                        <Actionsheet.Item
                            onPress={actionsMap[action]}
                            key={action}
                        >
                            {action}
                        </Actionsheet.Item>
                    ))}
                </Actionsheet.Content>
            </Actionsheet>
        </Container>
    );
};
