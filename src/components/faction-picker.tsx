import React from 'react';
import {default as DropDownPicker} from 'react-native-dropdown-picker';
import {FactionPickerProps} from '../types/components/props';
import {Factions, factions} from '../types/consts';

type LocalItemType = {
    label: Factions,
    value: Factions,
    icon?: () => JSX.Element
}

const dropdwonValues : LocalItemType[] = factions.map((faction) => ({
    label: faction,
    value: faction
}));

export const FactionPicker : React.FC<FactionPickerProps> = ({selectedFaction, onChange}) => {
    const onValueChange = (item : LocalItemType) : void => {
        onChange(item.value);
    };

    return (
        <DropDownPicker
            items={dropdwonValues}
            defaultValue={selectedFaction || factions[0]}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={onValueChange}
        />
    );
};

