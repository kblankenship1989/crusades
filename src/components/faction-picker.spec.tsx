import React from 'react';
import {FactionPicker} from './faction-picker';
import {factions} from '../types/consts';
import {render} from '@testing-library/react-native';
import {FactionPickerProps} from '../types/components/props';

describe('Given the Faction Picker Component', () => {
    it('should render correctly', () => {
        const testProps : FactionPickerProps = {
            selectedFaction: factions[3],
            onChange: jest.fn()
        };
        const component = (<FactionPicker
            {...testProps}
        />);

        expect(render(component).toJSON()).toMatchSnapshot();
    });
});
