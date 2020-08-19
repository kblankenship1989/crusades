import React from 'react';
import {View, Button} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import {getColorScheme} from '../helpers/getColorScheme';
import {appStyles} from '../../styles';

export type IncrementorDecrementor = 1| -1;

export type RequisitionPointsSelectorProps = {
    currentPoints: number
    updateRequisitionPoints: (changeValue: IncrementorDecrementor) => void
};

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

export const RequisitionPointsSelector = ({currentPoints, updateRequisitionPoints} : RequisitionPointsSelectorProps) : JSX.Element => {
    return (
        <Card
            title={'Requisition Points'}
        >
            <View
                style={styles.row}
                accessibilityLabel={`Current Points: ${currentPoints}/5`}
            >
                <Button
                    title={'-'}
                    disabled={currentPoints===0}
                    onPress={() => updateRequisitionPoints(-1)}
                />
                {getIconToRender(0, currentPoints)}
                {getIconToRender(1, currentPoints)}
                {getIconToRender(2, currentPoints)}
                {getIconToRender(3, currentPoints)}
                {getIconToRender(4, currentPoints)}
                <Button
                    title={'+'}
                    disabled={currentPoints === 5}
                    onPress={() => updateRequisitionPoints(1)}
                />
            </View>
        </Card>
    );
};
