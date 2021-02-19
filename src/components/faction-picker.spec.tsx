import React from 'react';
import {FactionPicker, FactionPickerProps} from './faction-picker';
import {render} from '@testing-library/react-native';
import {Factions} from '../types/enums';

describe('Given the Faction Picker Component', () => {
    it('should render correctly', () => {
        const testProps : FactionPickerProps = {
            selectedFaction: Factions.UNALIGNED,
            onChange: jest.fn()
        };
        const component = (<FactionPicker
            {...testProps}
        />);

        expect(render(component).toJSON()).toMatchSnapshot();
    });
});
