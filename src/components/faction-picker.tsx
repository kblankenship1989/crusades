import React from 'react';
import {default as DropDownPicker} from 'react-native-dropdown-picker';
import {getColorScheme} from '../helpers/getColorScheme';
import {appStyles} from '../../styles';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {FactionPickerProps} from '../types/components/props';
import {factions} from '../types/consts';

const colorScheme = getColorScheme();
const styles = appStyles(colorScheme);

const dropdwonValues = factions.map((faction) => ({
    label: faction,
    value: faction
}));

export const FactionPicker : React.FC<FactionPickerProps> = ({selectedFaction, onChange}) => {
    const onValueChange = (item : any, index : number) : void => {
        onChange(factions[index]);
    };

    return (
        <View style={styles.pickerRow}>
            <Icon
                size={18}
                name={'sword-cross'}
                type={'material-community'}
            />
            <DropDownPicker
                items={dropdwonValues}
                defaultValue={selectedFaction || factions[0]}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={onValueChange}
            />
        </View>
    );
};

