import React from 'react';
import {View, Separator, Text, Left, Button, Icon, Right, Body} from 'native-base';
import {Picker, PickerItem} from './picker';

export type QuantitySelectorProps = {
    title: string,
    min: number,
    max: number,
    multiplier: number,
    placeholder: string,
    selectedValue: number,
    onQuantityChange: (quantity: number) => void
}

export const QuantitySelector : React.FC<QuantitySelectorProps> = ({
    title,
    min,
    max,
    multiplier,
    onQuantityChange,
    selectedValue,
    placeholder
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
            <Left>
                <Button rounded icon>
                    <Icon type={'MaterialCommunityIcons'} name={'minus-circle'}/>
                </Button>
            </Left>
            <Body>
                <Picker
                    items={getAvailableOptions()}
                    placeholder={placeholder}
                    onChange={onQuantityChange}
                    selectedValue={selectedValue}
                />
            </Body>
            <Right>
                <Button rounded icon>
                    <Icon type={'MaterialCommunityIcons'} name={'plus-circle'}/>
                </Button>
            </Right>
        </View>
    );
};
