import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {getColorScheme} from '../helpers/getColorScheme';
import {appStyles} from '../../styles';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {FactionPickerProps} from '../types/components/props';
import {factions} from '../types/consts';

const colorScheme = getColorScheme();
const styles = appStyles(colorScheme);

export const FactionPicker : React.FC<FactionPickerProps> = ({selectedFaction, onChange}) => {
    const onValueChange = (itemValue: string | number, itemIndex: number) : void => {
        onChange(factions[itemIndex]);
    };
    return (
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
};

