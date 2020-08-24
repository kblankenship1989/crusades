import React from 'react';
import {TitleInputProps, TitleInput} from '../components/title-input';
import {Text} from 'react-native';

export type TitleProviderProps = TitleInputProps & {
    isEditing: boolean
}

export const TitleProvider = ({isEditing, value, ...titleInputProps} : TitleProviderProps) : JSX.Element => {
    if (isEditing) {
        return (<TitleInput
            value={value}
            {...titleInputProps}
        />);
    }

    return (<Text>{value}</Text>);
};
