import React from 'react';
import {enumKeys, isEnumKey} from '../helpers/enum-helpers';
import {BattleOutcomes} from '../enums';

import {Picker} from './picker';

export type BattleOutcomePickerProps = {
    selectedBattleOutcome?: BattleOutcomes,
    onChange: (faction: BattleOutcomes) => void
}

type Item = {
    key: keyof typeof BattleOutcomes,
    value: BattleOutcomes
}

const items : Item[] = enumKeys(BattleOutcomes).map((key) => ({
    key,
    value: BattleOutcomes[key]
}));

export const BattleOutcomePicker : React.FC<BattleOutcomePickerProps> = ({selectedBattleOutcome, onChange}) => {
    const onValueChange = (item : React.ReactText) : void => {
        if (isEnumKey(BattleOutcomes)(item)) {
            onChange(item);
        }
    };

    return (
        <Picker
            selectedValue={selectedBattleOutcome}
            placeholder={'Select Outcome'}
            items={items}
            onChange={onValueChange}
        />
    );
};

