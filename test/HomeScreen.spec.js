import React from 'react';
import {fireEvent, render, waitFor, waitForElementToBeRemoved} from '@testing-library/react-native';
import {HomeScreen} from '../screens/home-screen';

describe('Creating an Order of Battle', () => {
    let component;
    
    beforeEach(() => {
        component = render(<HomeScreen />);
    });

    it('should add the Order of Battle to the list', async () => {
        const title = 'Test Order of Battle';

        const addButton = component.getByTestId('addOrderOfBattleButton');
        fireEvent.press(addButton);

        await waitFor(() => component.getByTestId('addOrderOfBattleModal'));

        const oOBTitle = component.getByTestId('orderOfBattleTitle');
        fireEvent.changeText(oOBTitle, title);

        const createButton = component.getByTestId('createOrderOfBattleButton');
        fireEvent.press(createButton);

        await waitForElementToBeRemoved(() => component.queryByTestId('addOrderOfBattleModal'));

        expect(component.queryAllByTestId('orderOfBattle')).toHaveLength(1);
    });
});
