import React from 'react';
import {FormControl, Select,} from 'native-base';

export type PickerItem<T> = {
    key: T,
    value: T,
    label?: string
}

export type PickerProps<T = any> = {
    selectedValue?: T,
    onChange: (value: T) => void,
    items: PickerItem<T>[],
    placeholder?: string,
    title: string
    isRequired: boolean
}

export const Picker : React.FC<PickerProps> = ({
    items,
    selectedValue,
    onChange,
    placeholder,
    isRequired,
    title
}) => {
    return (
        <FormControl isRequired={isRequired}>
            <FormControl.Label>{title}</FormControl.Label>
            <Select
                minWidth={200}
                placeholder={placeholder}
                selectedValue={selectedValue}
                onValueChange={onChange}
            >
                {items.map((item) => (
                    <Select.Item
                        label={item.label || item.value.toString()}
                        value={item.value}
                        key={item.key}
                    />
                ))}
            </Select>
        </FormControl>
    );
};
