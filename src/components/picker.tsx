import React from 'react';
import {Item, Picker as NBPicker, Icon} from 'native-base';

type PickerItem = {
    key: string,
    value: string,
    label?: string
}

export type PickerProps = {
    selectedValue?: string,
    onChange: (value: React.ReactText, index: number) => void,
    items: PickerItem[],
    placeholder: string
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
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder={placeholder}
                // placeholderStyle={{color: '#bfc6ea'}}
                // placeholderIconColor="#007aff"
                selectedValue={selectedValue}
                onValueChange={onChange}
            >
                {items.map((item) => (
                    <NBPicker.Item
                        label={item.label || item.value}
                        value={item.value}
                        key={item.key}
                    />
                ))}
            </NBPicker>
        </Item>
    );
};
