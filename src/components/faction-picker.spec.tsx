import React from 'react';
import {FactionPicker} from './faction-picker';
import {render} from '@testing-library/react-native';

describe('Given the Faction Picker Component', () => {
    it('should render correctly', () => {
        const testProps = {
            selectedFaction: 'UNALIGNED',
            onChange: jest.fn()
        };
        const component = (<FactionPicker
            {...testProps}
        />);

        expect(render(component).toJSON()).toMatchSnapshot();
    });
});
