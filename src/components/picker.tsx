import React from 'react';
import {Picker as RNPPicker} from '@react-native-picker/picker';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

type PickerItem = {
    key: string,
    value: string,
    label?: string
}

export type PickerProps = {
    selectedValue: string,
    onChange: (value: React.ReactText, index: number) => void,
    title: string,
    items: PickerItem[],
    prompt: string
}

export const Picker : React.FC<PickerProps> = ({
    items,
    selectedValue,
    onChange,
    title,
    prompt
}) => {
    return (
        <View>
            <Text h3>{title}</Text>
            <RNPPicker
                selectedValue={selectedValue}
                mode={'dialog'}
                prompt={prompt}
                onValueChange={onChange}
            >
                {items.map((item) => (
                    <RNPPicker.Item
                        label={item.label || item.value}
                        value={item.value}
                        key={item.key}
                    />
                ))}
            </RNPPicker>
        </View>
    );
};

