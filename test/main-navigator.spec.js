import React from 'react';
import {fireEvent, render, waitFor, waitForElementToBeRemoved} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from '../navigation/main-navigator';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Creating an Order of Battle', () => {
    it('should create a new order of battle with the title provided when the create button is clicked', async () => {
        const component = (<NavigationContainer>
            <MainNavigator />
        </NavigationContainer>);
        
        const {
            queryByText,
            getByPlaceholderText,
            getByDisplayValue,
            getByText
        } = render(component);

        
        const title = 'Test Order of Battle';

        await getByText('Crusades!!!');
        const oOBTitle = await getByPlaceholderText('Title');
        fireEvent(oOBTitle, 'onChangeText', title);

        const input = await getByDisplayValue(title);
        expect(input).toStrictEqual(oOBTitle);

        const createButton = getByText('Create');
        fireEvent(createButton, 'onPress');

        const oOBHeader = await queryByText('Order of Battle');
        expect(oOBHeader).toBeTruthy();

        const titleDisplay = await queryByText(`Title: ${title}`);
        expect(titleDisplay).toBeTruthy();
    });

    it('should show the list of Orders of Battle on the home page', async () => {
        const component = (<NavigationContainer>
            <MainNavigator />
        </NavigationContainer>);
        
        const {
            queryByText,
            getByPlaceholderText,
            getByText,
            getByTestId,
            queryByPlaceholderText
        } = render(component);

        
        const title = 'Test Order of Battle';

        await waitFor(() => queryByText('Crusades!!!'));
        const oOBTitle = await getByPlaceholderText('Title');
        fireEvent(oOBTitle, 'onChangeText', title);

        const createButton = getByText('Create');
        fireEvent(createButton, 'onPress');

        await waitFor(() => queryByText('Order of Battle'));

        const backButton = await getByTestId('header-back');
        fireEvent(backButton, 'onPress');

        await waitForElementToBeRemoved(() => queryByText('Order of Battle'));

        const clearedTitle = await queryByPlaceholderText('Title');
        expect(clearedTitle.props.value).toStrictEqual('');

        const oOBList = await queryByText(title);
        expect(oOBList).toBeTruthy();
    });

    it('should navigate to the Order of Battle Summary when a Order is clicked on the home page', async () => {
        const component = (<NavigationContainer>
            <MainNavigator />
        </NavigationContainer>);
        
        const {
            queryByText,
            getByPlaceholderText,
            getByText,
            getByTestId
        } = render(component);

        
        const title = 'Test Order of Battle';

        await waitFor(() => queryByText('Crusades!!!'));
        const oOBTitle = await getByPlaceholderText('Title');
        fireEvent(oOBTitle, 'onChangeText', title);

        const createButton = getByText('Create');
        fireEvent(createButton, 'onPress');

        await waitFor(() => queryByText('Order of Battle'));

        const backButton = await getByTestId('header-back');
        fireEvent(backButton, 'onPress');

        await waitForElementToBeRemoved(() => queryByText('Order of Battle'));

        const oOBList = await getByText(title);
        fireEvent(oOBList, 'onPress');

        const oOBHeader = await queryByText('Order of Battle');
        expect(oOBHeader).toBeTruthy();

        const titleDisplay = await queryByText(`Title: ${title}`);
        expect(titleDisplay).toBeTruthy();
    });
});
