import React from 'react';
import {enumKeys, isEnumKey} from '../helpers/enum-helpers';
import {Factions} from '../enums';

import {Picker} from './picker';

export type FactionPickerProps = {
    selectedFaction?: Factions,
    onChange: (faction: Factions) => void,
    placeholder?: string,
    title: string
}

type Item = {
    key: keyof typeof Factions,
    value: Factions
}

const items : Item[] = enumKeys(Factions).map((key) => ({
    key,
    value: Factions[key]
}));

export const FactionPicker : React.FC<FactionPickerProps> = ({selectedFaction, onChange, placeholder, title}) => {
    const onValueChange = (item : React.ReactText) : void => {
        if (isEnumKey(Factions)(item)) {
            onChange(item);
        }
    };

    return (
        <Picker
            title={title}
            isRequired={true}
            selectedValue={selectedFaction}
            items={items}
            onChange={onValueChange}
            placeholder={placeholder || 'Select Faction'}
        />
    );
};

