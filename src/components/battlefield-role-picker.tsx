import React from 'react';
import {enumKeys, isEnumKey} from '../helpers/enum-helpers';
import {BattlefieldRoles} from '../enums';

import {Picker} from './picker';

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
        <Picker
            isRequired={true}
            title={title}
            selectedValue={selectedRole}
            items={items}
            onChange={onValueChange}
            placeholder={placeholder || 'Select Battlefield Role'}
        />
    );
};

