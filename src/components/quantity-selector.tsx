import React from 'react';
import {View, Separator, Text, Button, Icon, Grid, Col} from 'native-base';
import {Picker, PickerItem} from './picker';

export type QuantitySelectorProps = {
    title: string,
    min: number,
    max: number,
    multiplier: number,
    selectedValue: number,
    onQuantityChange: (quantity: number) => void
}

export const QuantitySelector : React.FC<QuantitySelectorProps> = ({
    title,
    min,
    max,
    multiplier,
    onQuantityChange,
    selectedValue
}) => {
    const getAvailableOptions = () : PickerItem<number>[] => {

        const availableOptions : PickerItem<number>[] = [];

        let i : number;

        for (i = min; i < max; i += multiplier) {
            availableOptions.push({
                key: i,
                value: i
            });
        }

        return availableOptions;
    };

    return (
        <View>
            <Separator bordered>
                <Text>{title}</Text>
            </Separator>
            <Grid>
                <Col>
                    <Button
                        transparent
                        icon
                        disabled={selectedValue <= min}
                        onPress={() => onQuantityChange(selectedValue - 1)}
                    >
                        <Icon type={'MaterialCommunityIcons'} name={'minus-circle'}/>
                    </Button>
                </Col>
                <Col>
                    <Picker
                        items={getAvailableOptions()}
                        onChange={onQuantityChange}
                        selectedValue={selectedValue}
                    />
                </Col>
                <Col>
                    <Button
                        transparent
                        icon
                        disabled={selectedValue >= max}
                        onPress={() => onQuantityChange(selectedValue + 1)}
                    >
                        <Icon type={'MaterialCommunityIcons'} name={'plus-circle'}/>
                    </Button>
                </Col>
            </Grid>
        </View>
    );
};
