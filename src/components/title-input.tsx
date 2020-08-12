import React from 'react';
import {Input, Icon} from 'react-native-elements';
import {getColorScheme} from '../helpers/getColorScheme';
import {appStyles} from '../../styles';

type TitleInputProps = {
    value: string,
    placeholder?: string,
    onChangeText: (title: string) => void
}
const colorScheme = getColorScheme();
const styles = appStyles(colorScheme);


export const TitleInput = (props : TitleInputProps) : JSX.Element => (
    <Input
        leftIcon={
            <Icon
                size={18}
                name={'format-title'}
                type={'material-community'}
            />
        }
        placeholder={props.placeholder || 'Title'}
        onChangeText={props.onChangeText}
        value={props.value}
        style={styles.textInput}
    />
);
