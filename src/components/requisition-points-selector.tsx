import React from 'react';
import {View, Button, Text} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import {getColorScheme} from '../helpers/getColorScheme';
import {appStyles} from '../../styles';
import {RequisitionPointsSelectorProps} from '../types/components/props';

const colorScheme = getColorScheme();
const styles = appStyles(colorScheme);


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
        <Card>
            <Card.Title>
                <Text>{'Requisition Points'}</Text>
            </Card.Title>
            <View
                style={styles.row}
                accessibilityLabel={`Current Points: ${currentPoints}/5`}
            >
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
        </Card>
    );
};
