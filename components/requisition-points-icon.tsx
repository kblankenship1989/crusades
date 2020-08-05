import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

type RequisitionPointsIconProps = {
    currentPoints: number
};

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
            style={{
                flex:1,
                flexDirection: 'row'
            }}
        >
            {getIconToRender(0, currentPoints)}
            {getIconToRender(1, currentPoints)}
            {getIconToRender(2, currentPoints)}
            {getIconToRender(3, currentPoints)}
            {getIconToRender(4, currentPoints)}
        </View>
    );
};
