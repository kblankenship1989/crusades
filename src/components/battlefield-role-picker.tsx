import React from 'react';
import {enumKeys, isEnumKey} from '../helpers/enum-helpers';
import {BattlefieldRoles} from '../enums';

import {Picker} from './picker';
import {View, Separator, Text} from 'native-base';

export type BattlefieldRolePickerProps = {
    selectedRole?: BattlefieldRoles,
    onChange: (role: BattlefieldRoles) => void,
    placeholder?: string,
    title: string
}

type Item = {
    key: keyof typeof BattlefieldRoles,
    value: BattlefieldRoles
}

const items : Item[] = enumKeys(BattlefieldRoles).map((key) => ({
    key,
    value: BattlefieldRoles[key]
}));

export const BattlefieldRolePicker : React.FC<BattlefieldRolePickerProps> = ({selectedRole, onChange, placeholder, title}) => {
    const onValueChange = (item : React.ReactText) : void => {
        if (isEnumKey(BattlefieldRoles)(item)) {
            onChange(item);
        }
    };

    return (
        <View>
            <Separator>
                <Text>{title}</Text>
            </Separator>
            <Picker
                selectedValue={selectedRole}
                items={items}
                onChange={onValueChange}
                placeholder={placeholder || 'Select Battlefield Role'}
            />
        </View>
    );
};

