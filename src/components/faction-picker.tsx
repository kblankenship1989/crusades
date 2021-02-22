import React from 'react';
import {enumKeys, isEnumKey} from '../helpers/enum-helpers';
import {Factions} from '../enums';

import {Picker} from './picker';

export type FactionPickerProps = {
    selectedFaction: Factions,
    title?: string
    onChange: (faction: Factions) => void
}

type Item = {
    key: keyof typeof Factions,
    value: Factions
}

const items : Item[] = enumKeys(Factions).map((key) => ({
    key,
    value: Factions[key]
}));

export const FactionPicker : React.FC<FactionPickerProps> = ({selectedFaction, onChange, title}) => {
    const onValueChange = (item : React.ReactText) : void => {
        if (isEnumKey(Factions)(item)) {
            onChange(item);
        }
    };

    return (
        <Picker
            selectedValue={selectedFaction}
            prompt={title || 'Select Faction'}
            items={items}
            onChange={onValueChange}
            title={'Faction'}
        />
    );
};

