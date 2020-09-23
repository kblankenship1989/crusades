import React from 'react';
import {TitleInput} from '../components/title-input';
import {Text, View} from 'react-native';
import {FactionPicker} from '../components/faction-picker';
import {Factions} from '../types/consts';
import {factionsIconMap} from '../configs/40k-icons';

export type TitleProviderProps = {
    isEditing: boolean,
    title: string,
    placeholder?: string,
    onTitleChange: (title: string) => void,
    onFactionChange: (itemValue: string | number, itemIndex: number) => void,
    selectedFaction: Factions
}

export const TitleFactionProvider = (props : TitleProviderProps) : JSX.Element => {
    if (props.isEditing) {
        return (
            <View>
                <TitleInput
                    value={props.title}
                    placeholder={props.placeholder}
                    onChangeText={props.onTitleChange}
                />
                <FactionPicker
                    selectedFaction={props.selectedFaction}
                    onValueChange={props.onFactionChange}
                />
            </View>);
    }

    const IconToRender = factionsIconMap[props.selectedFaction];

    return (
        <View>
            <Text>{props.title}</Text>
            <IconToRender
                size={18}
                color={'#8ba4c9'}
            />
        </View>
    );
};
