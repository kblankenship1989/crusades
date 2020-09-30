import React from 'react';
import {Picker} from '@react-native-community/picker';
import {getColorScheme} from '../helpers/getColorScheme';
import {appStyles} from '../../styles';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {factions, Factions} from '../types/consts';

export type FactionPickerProps = {
    selectedFaction: Factions,
    onValueChange: (itemValue: string | number, itemIndex: number) => void
}
const colorScheme = getColorScheme();
const styles = appStyles(colorScheme);

export const FactionPicker = ({selectedFaction, onValueChange} : FactionPickerProps) : JSX.Element => (
    <View style={styles.pickerRow}>
        <Icon
            size={18}
            name={'sword-cross'}
            type={'material-community'}
        />
        <Picker
            accessibilityLabel={'Faction'}
            testID={'faction-picker'}
            style={styles.picker}
            selectedValue={selectedFaction}
            onValueChange={onValueChange}
        >
            {factions.map((faction) => (
                <Picker.Item
                    label={faction}
                    value={faction}
                    key={faction}
                />
            ))}
        </Picker>
    </View>
);
