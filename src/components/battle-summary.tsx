import React from 'react';
import {Card} from 'react-native-elements';
import {Text, Button} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {getColorScheme} from '../helpers/getColorScheme';
import {appStyles} from '../../styles';
import {BattleOutcomes, battleOutcomes} from '../types/consts';

export type BattleSummaryProps = {
    battleTallies: BattleOutcomes[],
    addBattleTally: (battleOutcome : BattleOutcomes) => void
}

const colorScheme = getColorScheme();
const styles = appStyles(colorScheme);

export const BattleSummary = ({battleTallies, addBattleTally} : BattleSummaryProps) : JSX.Element => {
    const [currentSelection, setCurrentSelection] = React.useState<BattleOutcomes | undefined>(undefined);

    const updateCurrentSelection = (itemValue: string | number, itemIndex : number) : void => {
        setCurrentSelection(battleOutcomes[itemIndex]);
    };

    const addNewBattleTally = () : void => {
        if (currentSelection !== undefined) {
            addBattleTally(currentSelection);
        }

        setCurrentSelection(undefined);
    };

    enum WinLoseDraw {
        Win = 'Win',
        Lose = 'Lose',
        Draw = 'Draw'
    }

    interface WinLoseDrawSummary {
        [WinLoseDraw.Win]: number,
        [WinLoseDraw.Lose]: number,
        [WinLoseDraw.Draw]: number
    }

    const addTallyToSummary = (summary: WinLoseDrawSummary, key: keyof WinLoseDrawSummary) : WinLoseDrawSummary => {
        return {
            ...summary,
            [key]: summary[key] + 1
        };
    };

    const winLoseDrawMap : Record<BattleOutcomes, WinLoseDraw> = {
        [battleOutcomes[0]]: WinLoseDraw.Lose,
        [battleOutcomes[1]]: WinLoseDraw.Lose,
        [battleOutcomes[2]]: WinLoseDraw.Lose,
        [battleOutcomes[3]]: WinLoseDraw.Draw,
        [battleOutcomes[4]]: WinLoseDraw.Win,
        [battleOutcomes[5]]: WinLoseDraw.Win,
        [battleOutcomes[6]]: WinLoseDraw.Win
    };

    const wldSummary : WinLoseDrawSummary = battleTallies.reduce((summary : WinLoseDrawSummary, battleTally : BattleOutcomes) : WinLoseDrawSummary => {
        const key : WinLoseDraw = winLoseDrawMap[battleTally];

        return addTallyToSummary(summary, key);

    }, {[WinLoseDraw.Win]: 0, [WinLoseDraw.Lose]: 0, [WinLoseDraw.Draw]: 0});

    return (
        <Card
            title={'Battle Summary'}
        >
            <Text>W / L / D</Text>
            <Text>{`${wldSummary[WinLoseDraw.Win]} / ${wldSummary[WinLoseDraw.Lose]} / ${wldSummary[WinLoseDraw.Draw]}`}</Text>
            <Picker
                accessibilityLabel={'Faction'}
                testID={'faction-picker'}
                style={styles.picker}
                selectedValue={currentSelection}
                onValueChange={updateCurrentSelection}
            >
                {battleOutcomes.map((battleOutcome) => (
                    <Picker.Item
                        label={battleOutcome}
                        value={battleOutcome}
                        key={battleOutcome}
                    />
                ))}
            </Picker>
            <Button
                onPress={addNewBattleTally}
                title={'Add Battle'}
            />
        </Card>
    );
};
