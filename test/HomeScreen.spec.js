import React from 'react';
import {fireEvent, render, waitFor, waitForElementToBeRemoved} from '@testing-library/react-native';
import {HomeScreen} from '../screens/home-screen';

describe('Creating an Order of Battle', () => {
    let component;
    
    beforeEach(() => {
        component = render(<HomeScreen />);
    });

    it('should add the Order of Battle to the list', () => {
        const title = 'Test Order of Battle';

        const addButton = component.getByTestId('add-order-of-battle-button');
        fireEvent.press(addButton);

        const oOBTitle = component.getByPlaceholderText('Title');
        fireEvent.changeText(oOBTitle, title);

        const createButton = component.getByTestId('create-order-of-battle-button');
        fireEvent.press(createButton);

        fireEvent.press(addButton);

        fireEvent.changeText(oOBTitle, title);

        fireEvent.press(createButton);

        expect(component.queryAllByTestId('order-of-battle')).toHaveLength(2);

        expect(component.toJSON()).toMatchSnapshot();
    });
});
