import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {getColorScheme} from '../helpers/getColorScheme';
import {appStyles} from '../styles';

type RequisitionPointsIconProps = {
    currentPoints: number
};

const colorScheme = getColorScheme();
const styles = appStyles(colorScheme);


const getIconToRender = (index : number, currentPoints : number) : JSX.Element => {
    return  (
        <Icon
            size={18}
            type={'material-community'}
            name={index < currentPoints ? 'skull' : 'skull-outline'}
        />
    );
};

export const RequisitionPointsIcon = ({currentPoints} : RequisitionPointsIconProps) : JSX.Element => {
    return (
        <View
            testID={'requisition-points'}
            style={styles.row}
        >
            {getIconToRender(0, currentPoints)}
            {getIconToRender(1, currentPoints)}
            {getIconToRender(2, currentPoints)}
            {getIconToRender(3, currentPoints)}
            {getIconToRender(4, currentPoints)}
        </View>
    );
};
