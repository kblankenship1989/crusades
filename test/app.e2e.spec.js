import React from 'react';
import {fireEvent, render, waitFor, act} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {MainNavigator} from '../src/navigation/main-navigator';
import {rootReducer} from '../src/redux/reducers';
import {configureStore} from '../src/redux/store';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Creating an Order of Battle', () => {
    it('should create a new order of battle with the title provided when the create button is clicked and navigate to the summary page', async () => {
        const mockStore = configureStore(rootReducer);
        const component = (<Provider store={mockStore}>
            <MainNavigator/>
        </Provider>);

        const {
            queryByText,
            getByPlaceholderText,
            getByText,
            queryByDisplayValue,
            getByTestId
        } = render(component);


        const title = 'Test Order of Battle';

        await act(async () => {
            getByText('Crusades!!!');
            const oOBTitle = await getByPlaceholderText('Order Of Battle');
            fireEvent(oOBTitle, 'onChangeText', title);
        });

        const input = await queryByDisplayValue(title);
        expect(input).toBeTruthy();

        await act(async () => {
            const createButton = getByTestId('create-button');
            fireEvent(createButton, 'onPress');
        });
        const oOBHeader = await queryByText('Order of Battle');
        expect(oOBHeader).toBeTruthy();

        const titleInput = await queryByDisplayValue(title);
        expect(titleInput).toBeTruthy();
    });

    it('should show the list of Orders of Battle on the home page', async () => {
        const mockStore = configureStore(rootReducer);
        const component = (<Provider store={mockStore}>
            <MainNavigator/>
        </Provider>);

        const {
            queryByText,
            getByPlaceholderText,
            getByTestId,
            getByText,
            queryAllByPlaceholderText
        } = render(component);


        const title = 'Test Order of Battle';

        await act(async () => {
            getByText('Crusades!!!');
            const oOBTitle = await getByPlaceholderText('Order Of Battle');
            fireEvent(oOBTitle, 'onChangeText', title);
        });

        await act(async () => {
            const createButton = await getByTestId('create-button');
            fireEvent(createButton, 'onPress');
        });

        await act(async () => {
            const cancelButton = await getByTestId('order-of-battle-cancel');
            fireEvent(cancelButton, 'onPress');
        });

        const clearedTitle = await queryAllByPlaceholderText('Order Of Battle');
        expect(clearedTitle[0].props.value).toStrictEqual('');

        const oOBList = await queryByText(title);
        expect(oOBList).toBeTruthy();
    });

    it('should navigate to the Order of Battle Summary when a Order is clicked on the home page', async () => {
        const mockStore = configureStore(rootReducer);
        const component = (<Provider store={mockStore}>
            <MainNavigator/>
        </Provider>);

        const {
            getByPlaceholderText,
            getAllByPlaceholderText,
            getByText,
            getByTestId,
            queryByDisplayValue
        } = render(component);


        const title = 'Test Order of Battle';
        const title2 = 'Test Other Order of Battle';

        await act(async () => {
            getByText('Crusades!!!');
            const oOBTitle = await getByPlaceholderText('Order Of Battle');
            fireEvent(oOBTitle, 'onChangeText', title);
        });

        await act(async () => {
            const createButton = await getByTestId('create-button');
            fireEvent(createButton, 'onPress');
        });

        await act(async () => {
            const cancelButton = await getByTestId('order-of-battle-cancel');
            fireEvent(cancelButton, 'onPress');
        });

        await act(async () => {
            const oOBTitle = await getAllByPlaceholderText('Order Of Battle');
            fireEvent(oOBTitle[0], 'onChangeText', title2);
        });

        await act(async () => {
            const createButton = await getByTestId('create-button');
            fireEvent(createButton, 'onPress');
        });

        await act(async () => {
            const cancelButton = await getByTestId('order-of-battle-cancel');
            fireEvent(cancelButton, 'onPress');
        });

        await act(async () => {
            const oOBList = await getByText(title);
            fireEvent(oOBList, 'onPress');
        });

        const titleInput = await queryByDisplayValue(title);
        expect(titleInput).toBeTruthy();
    });

    // describe('and adding a crusade card to the order of battle', () => {
    //     it('should create a new crusade card with the provided unit name and and navigate to the summary page', () => {
    //         expect(false).toBeTruthy();
    //     });
    // });
});
