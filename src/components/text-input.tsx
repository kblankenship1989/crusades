import React from 'react';
import {Item, Label, Input, Text} from 'native-base';

export type TextInputProps = {
    label: string,
    value?: string,
    onChangeText: (text: string) => void,
    isRequired?: boolean
}
export const TextInput : React.FC<TextInputProps> = ({label, value, onChangeText, isRequired}) => {
    const hasError = isRequired && !value;
    return (
        <Item floatingLabel error={hasError}>
            <Label>{label}</Label>
            <Input
                onChangeText={onChangeText}
                value={value}
            />
            {hasError && <Text>Required</Text>}
        </Item>
    );
};
