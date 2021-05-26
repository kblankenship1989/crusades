import React from 'react';
import {Input, FormControl, Stack} from 'native-base';

export type TextInputProps = {
    label: string,
    value?: string,
    onChangeText: (text: string) => void,
    isRequired?: boolean
}
export const TextInput : React.FC<TextInputProps> = ({label, value, onChangeText, isRequired}) => {
    const hasError = isRequired && !value;
    return (
        <FormControl isRequired={isRequired} isInvalid={hasError} p={2}>
            <Stack mx={4}>
                <FormControl.ErrorMessage>{'Required'}</FormControl.ErrorMessage>
                <Input
                    placeholder={label}
                    onChangeText={onChangeText}
                    value={value}
                    my={2}
                />
            </Stack>
        </FormControl>
    );
};
