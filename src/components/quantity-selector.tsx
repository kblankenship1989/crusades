import React from 'react';
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

        for (i = min; i <= max; i += multiplier) {
            availableOptions.push({
                key: i,
                value: i
            });
        }

        return availableOptions;
    };

    return (
        <Picker
            title={title}
            isRequired={false}
            items={getAvailableOptions()}
            onChange={onQuantityChange}
            selectedValue={selectedValue}
        />
    );
};
