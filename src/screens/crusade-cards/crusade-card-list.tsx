import React from 'react';
import {
    Container,
    Header,
    Text,
    Button,
    Footer,
    FooterTab,
    View,
    Separator
} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {crusadeCardListConnector} from './crusade-card-list-connector';
import {SwipeListWrapper} from '../../components/swipe-list-background-image';
import {CrusadeCard} from '../../redux/state/order-of-battle/crusade-card';
import {BattlefieldRoles} from '../../enums';

export type OrdersOfBattleListProps = ConnectedProps<typeof crusadeCardListConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.CRUSADE_CARDS>
}

export const CrusadeCardList = ({
    crusadeCards,
    createCrusadeCard,
    loadSelectedCrusadeCard,
    deleteCrusadeCard,
    navigation
} : OrdersOfBattleListProps) : JSX.Element => {
    const crusadeCardSectionedList = Object.values(crusadeCards).reduce<Record<BattlefieldRoles, CrusadeCard[]>>((battefieldRoleLists, crusadeCard) : Record<BattlefieldRoles, CrusadeCard[]> => {
        battefieldRoleLists[crusadeCard.battleFieldRole].push(crusadeCard);
        return battefieldRoleLists;
    }, {
        [BattlefieldRoles.DEDICATED_TRANSPORT]: [],
        [BattlefieldRoles.FAST_ATTACK]: [],
        [BattlefieldRoles.FLYER]: [],
        [BattlefieldRoles.FORTIFICATION]: [],
        [BattlefieldRoles.ELITES]: [],
        [BattlefieldRoles.HEAVY_SUPPORT]: [],
        [BattlefieldRoles.HQ]: [],
        [BattlefieldRoles.TROOPS]: [],
        [BattlefieldRoles.LORD_OF_WAR]: []
    });

    const navigateToCrusadeCardSummary = (crusadeCardId : string) : void => {
        loadSelectedCrusadeCard(crusadeCardId);
        navigation.push(Screens.CRUSADE_CARD_SUMMARY);
    };

    const navigateToBattleTallies = (crusadeCardId : string) : void => {
        loadSelectedCrusadeCard(crusadeCardId);
        navigation.push(Screens.BATTLE_TALLIES);
    };

    const createOrderOfBattleAndNavigate = () : void => {
        createCrusadeCard();
        navigation.push(Screens.EDIT_CRUSADE_CARD, {isNew: true});
    };

    return (
        <Container>
            <Header />
            <View>
                <Separator bordered>
                    <Text>{BattlefieldRoles.HQ}</Text>
                </Separator>
                <SwipeListWrapper
                    data={crusadeCardSectionedList.HQ}
                    onDelete={(item: CrusadeCard) => deleteCrusadeCard(item.id)}
                    onInfo={(item: CrusadeCard) => navigateToCrusadeCardSummary(item.id)}
                    onPress={(item: CrusadeCard) => navigateToBattleTallies(item.id)}
                    getTitle={(item: CrusadeCard) => item.name || 'Untitled'}
                    imageKey={(item : CrusadeCard) => item.battleFieldRole}
                />
                <Separator bordered>
                    <Text>{BattlefieldRoles.TROOPS}</Text>
                </Separator>
                <SwipeListWrapper
                    data={crusadeCardSectionedList.Troops}
                    onDelete={(item: CrusadeCard) => deleteCrusadeCard(item.id)}
                    onInfo={(item: CrusadeCard) => navigateToCrusadeCardSummary(item.id)}
                    onPress={(item: CrusadeCard) => navigateToBattleTallies(item.id)}
                    getTitle={(item: CrusadeCard) => item.name || 'Untitled'}
                    imageKey={(item : CrusadeCard) => item.battleFieldRole}
                />
                <Separator bordered>
                    <Text>{BattlefieldRoles.ELITES}</Text>
                </Separator>
                <SwipeListWrapper
                    data={crusadeCardSectionedList.Elites}
                    onDelete={(item: CrusadeCard) => deleteCrusadeCard(item.id)}
                    onInfo={(item: CrusadeCard) => navigateToCrusadeCardSummary(item.id)}
                    onPress={(item: CrusadeCard) => navigateToBattleTallies(item.id)}
                    getTitle={(item: CrusadeCard) => item.name || 'Untitled'}
                    imageKey={(item : CrusadeCard) => item.battleFieldRole}
                />
                <Separator bordered>
                    <Text>{BattlefieldRoles.FAST_ATTACK}</Text>
                </Separator>
                <SwipeListWrapper
                    data={crusadeCardSectionedList['Fast Attack']}
                    onDelete={(item: CrusadeCard) => deleteCrusadeCard(item.id)}
                    onInfo={(item: CrusadeCard) => navigateToCrusadeCardSummary(item.id)}
                    onPress={(item: CrusadeCard) => navigateToBattleTallies(item.id)}
                    getTitle={(item: CrusadeCard) => item.name || 'Untitled'}
                    imageKey={(item : CrusadeCard) => item.battleFieldRole}
                />
                <Separator bordered>
                    <Text>{BattlefieldRoles.HEAVY_SUPPORT}</Text>
                </Separator>
                <SwipeListWrapper
                    data={crusadeCardSectionedList['Heavy Support']}
                    onDelete={(item: CrusadeCard) => deleteCrusadeCard(item.id)}
                    onInfo={(item: CrusadeCard) => navigateToCrusadeCardSummary(item.id)}
                    onPress={(item: CrusadeCard) => navigateToBattleTallies(item.id)}
                    getTitle={(item: CrusadeCard) => item.name || 'Untitled'}
                    imageKey={(item : CrusadeCard) => item.battleFieldRole}
                />
                <Separator bordered>
                    <Text>{BattlefieldRoles.FLYER}</Text>
                </Separator>
                <SwipeListWrapper
                    data={crusadeCardSectionedList.Flyer}
                    onDelete={(item: CrusadeCard) => deleteCrusadeCard(item.id)}
                    onInfo={(item: CrusadeCard) => navigateToCrusadeCardSummary(item.id)}
                    onPress={(item: CrusadeCard) => navigateToBattleTallies(item.id)}
                    getTitle={(item: CrusadeCard) => item.name || 'Untitled'}
                    imageKey={(item : CrusadeCard) => item.battleFieldRole}
                />
                <Separator bordered>
                    <Text>{BattlefieldRoles.DEDICATED_TRANSPORT}</Text>
                </Separator>
                <SwipeListWrapper
                    data={crusadeCardSectionedList['Dedicated Transport']}
                    onDelete={(item: CrusadeCard) => deleteCrusadeCard(item.id)}
                    onInfo={(item: CrusadeCard) => navigateToCrusadeCardSummary(item.id)}
                    onPress={(item: CrusadeCard) => navigateToBattleTallies(item.id)}
                    getTitle={(item: CrusadeCard) => item.name || 'Untitled'}
                    imageKey={(item : CrusadeCard) => item.battleFieldRole}
                />
                <Separator bordered>
                    <Text>{BattlefieldRoles.LORD_OF_WAR}</Text>
                </Separator>
                <SwipeListWrapper
                    data={crusadeCardSectionedList['Lord Of War']}
                    onDelete={(item: CrusadeCard) => deleteCrusadeCard(item.id)}
                    onInfo={(item: CrusadeCard) => navigateToCrusadeCardSummary(item.id)}
                    onPress={(item: CrusadeCard) => navigateToBattleTallies(item.id)}
                    getTitle={(item: CrusadeCard) => item.name || 'Untitled'}
                    imageKey={(item : CrusadeCard) => item.battleFieldRole}
                />
            </View>
            <Footer>
                <FooterTab>
                    <Button
                        full
                        onPress={createOrderOfBattleAndNavigate}
                    >
                        <Text>Create</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};
