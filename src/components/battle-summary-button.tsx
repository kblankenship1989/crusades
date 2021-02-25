import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, View} from 'react-native';
import {Text} from 'react-native-elements';
import {BattleOutcomes} from '../enums';
import {RootParamList, Screens} from '../navigation/root-param-list';
import {BattleResults} from '../redux/state/order-of-battle/battle-results';

export type BattleSummaryButtonProps = {
    battleTally: Record<string, BattleResults>
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

export const BattleSummaryButton : React.FC<BattleSummaryButtonProps> = ({battleTally}) : JSX.Element => {
    const navigation : StackNavigationProp<RootParamList, Screens.ORDER_OF_BATTLE_SUMMARY> = useNavigation();

    const navigateToBattleSummary = () : void => {
        navigation.push(Screens.BATTLE_SUMMARY, {
            battleResults: battleTally,
        });
    };

    const getWinLoseDrawCounts = () : string => {
        const wldCounts : Record<WinLoseDraw, number> = Object.values(battleTally).reduce((counts, battleResult) => {
            counts[WinLoseDrawMap[battleResult.result]]++;

            return counts;
        }, {
            WIN: 0,
            LOSE: 0,
            DRAW: 0
        });

        return `${wldCounts.WIN} / ${wldCounts.LOSE} / ${wldCounts.DRAW}`;
    };

    return (
        <View>
            <Text h3>Battle Summary (W/L/D)</Text>
            <Button
                title={getWinLoseDrawCounts()}
                onPress={navigateToBattleSummary}
            />
        </View>
    );
};
