import React from 'react';
import {Item, Picker as NBPicker} from 'native-base';

export type PickerItem<T> = {
    key: T,
    value: T,
    label?: string
}

export type PickerProps<T = any> = {
    selectedValue?: T,
    onChange: (value: T, index: number) => void,
    items: PickerItem<T>[],
    placeholder?: string
}

export const Picker : React.FC<PickerProps> = ({
    items,
    selectedValue,
    onChange,
    placeholder
}) => {
    return (
        <Item picker>
            <NBPicker
                mode={'dropdown'}
                style={{width: undefined}}
                placeholder={placeholder}
                selectedValue={selectedValue}
                onValueChange={onChange}
            >
                {items.map((item) => (
                    <NBPicker.Item
                        label={item.label || item.value.toString()}
                        value={item.value}
                        key={item.key}
                    />
                ))}
            </NBPicker>
        </Item>
    );
};
