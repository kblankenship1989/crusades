import React from 'react';
import {fireEvent, render, waitFor, waitForElementToBeRemoved} from '@testing-library/react-native';
import {HomeScreen} from '../screens/home-screen';

describe('Creating an Order of Battle', () => {
    let component;
    
    beforeEach(() => {
        component = render(<HomeScreen />);
    });

    it('should add the Order of Battle to the list', () => {
        const title1 = 'Test Order of Battle';
        const title2 = 'Test Second Order of Battle';

        const oOBTitle = component.getByPlaceholderText('Title');
        fireEvent(oOBTitle, 'onChangeText', title1);

        expect(component.getByDisplayValue(title1)).toStrictEqual(oOBTitle);

        const createButton = component.getByText('Create');
        fireEvent(createButton, 'onPress');

        expect(component.queryByText(title1)).toBeTruthy();

        expect(component.getAllByDisplayValue('')[0]).toStrictEqual(oOBTitle);

        fireEvent(oOBTitle,'onChangeText', title2);

        fireEvent(createButton, 'onPress');
    });
});
