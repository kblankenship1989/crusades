import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {factions, Factions} from '../types/consts';


type FactionPickerProps = {
    selectedFaction: Factions,
    onChange: (faction: Factions) => void
}

export const FactionPicker : React.FC<FactionPickerProps> = ({selectedFaction, onChange}) => {
    const onValueChange = (item : React.ReactText, index : number) : void => {
        onChange(factions[index]);
    };

    return (
        <Picker
            selectedValue={selectedFaction}
            mode={'dialog'}
            prompt={'Select Faction'}
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
    );
};

