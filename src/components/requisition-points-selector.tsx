import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

type RequisitionPointsSelectorProps = {
    currentPoints: number
    onChange: (points : number) => void
}

const styles = StyleSheet.create({
    requisitionPointsContainer: {
        flex: 1
    }
});

const getIconToRender = (index : number, currentPoints : number) : JSX.Element => {
    return  (
        <Icon
            size={18}
            type={'material-community'}
            name={index < currentPoints ? 'skull' : 'skull-outline'}
            key={`requisition-points-${index}`}
        />
    );
};

export const RequisitionPointsSelector = ({currentPoints, onChange} : RequisitionPointsSelectorProps) : JSX.Element => {
    return (
        <View
            style={styles.requisitionPointsContainer}
        >
            <Text>{'Requisition Points'}</Text>
            <Button
                title={'-'}
                disabled={currentPoints===0}
                onPress={() => onChange(currentPoints - 1)}
            />
            {getIconToRender(0, currentPoints)}
            {getIconToRender(1, currentPoints)}
            {getIconToRender(2, currentPoints)}
            {getIconToRender(3, currentPoints)}
            {getIconToRender(4, currentPoints)}
            <Button
                title={'+'}
                disabled={currentPoints === 5}
                onPress={() => onChange(currentPoints + 1)}
            />
        </View>
    );
};
