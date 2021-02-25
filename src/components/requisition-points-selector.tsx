import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Button} from 'react-native-elements';

type RequisitionPointsSelectorProps = {
    currentPoints: number
    onChange: (points : number) => void
}

const styles = StyleSheet.create({
    requisitionPointsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

const getIconToRender = (index : number, currentPoints : number) : JSX.Element => {
    return  (
        <Icon
            size={36}
            type={'material-community'}
            name={index < currentPoints ? 'skull' : 'skull-outline'}
            key={`requisition-points-${index}`}
        />
    );
};

export const RequisitionPointsSelector = ({currentPoints, onChange} : RequisitionPointsSelectorProps) : JSX.Element => {
    return (
        <View>
            <Text style={{fontSize: 32, alignSelf: 'center'}}>{'Requisition Points'}</Text>
            <View
                style={styles.requisitionPointsContainer}
            >
                <Button
                    style= {{flex: 1}}
                    icon={{
                        name: 'minus-circle',
                        type: 'material-community',
                        size: 36
                    }}
                    disabled={currentPoints===0}
                    onPress={() => onChange(currentPoints - 1)}
                />
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    {getIconToRender(0, currentPoints)}
                    {getIconToRender(1, currentPoints)}
                    {getIconToRender(2, currentPoints)}
                    {getIconToRender(3, currentPoints)}
                    {getIconToRender(4, currentPoints)}
                </View>
                <Button
                    style= {{flex: 1}}
                    icon={{
                        name: 'plus-circle',
                        type: 'material-community',
                        size: 36
                    }}
                    disabled={currentPoints===5}
                    onPress={() => onChange(currentPoints + 1)}
                />
            </View>
        </View>
    );
};
