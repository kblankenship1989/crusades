import React, {useState} from 'react';
import {FactionPickerProps, FactionPicker} from '../components/faction-picker';
import {View} from 'react-native';
import {factionsIconMap} from '../configs/40k-icons';
import {Icon} from 'react-native-elements';

export const FactionProvider = (props : FactionPickerProps) : JSX.Element => {
    const [isEditing, setEditing] = useState(false);

    if (isEditing) {
        return (<FactionPicker {...props}/>);
    }

    const IconToRender = factionsIconMap[props.selectedFaction];

    return (
        <View>
            <IconToRender
                size={18}
                color={'#8ba4c9'}
            />
            <Icon
                name={'pencil'}
                type={'font-awesome'}
                size={18}
                color={'#8ba4c9'}
                testID={'edit-faction'}
                onPress={() => setEditing(true)}
            />
        </View>
    );
};
