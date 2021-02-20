import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {enumKeys, isEnumKey} from '../helpers/enum-helpers';
import {Factions} from '../types/enums';
import {Text, View} from 'react-native';

export type FactionPickerProps = {
    selectedFaction: Factions,
    onChange: (faction: Factions) => void
}

export const FactionPicker : React.FC<FactionPickerProps> = ({selectedFaction, onChange}) => {
    const onValueChange = (item : React.ReactText) : void => {
        if (isEnumKey(Factions)(item)) {
            onChange(item);
        }
    };

    return (
        <View>
            <Text style={{fontSize: 24, alignSelf: 'center'}}>{'Faction'}</Text>
            <Picker
                selectedValue={selectedFaction}
                mode={'dialog'}
                prompt={'Select Faction'}
                onValueChange={onValueChange}
            >
                {enumKeys(Factions).map((faction) => (
                    <Picker.Item
                        label={Factions[faction]}
                        value={Factions[faction]}
                        key={faction}
                    />
                ))}
            </Picker>
        </View>
    );
};

