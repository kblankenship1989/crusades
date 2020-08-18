import React from 'react';
import {fireEvent, render, act} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {MainNavigator} from '../src/navigation/main-navigator';
import {rootReducer} from '../src/redux/reducers';
import {configureStore} from '../src/redux/store';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Creating an Order of Battle', () => {
    let renderedComponent,
        title;

    beforeEach(async () => {
        const mockStore = configureStore(rootReducer);
        const component = (
            <Provider store={mockStore}>
                <MainNavigator/>
            </Provider>);

        renderedComponent = render(component);

        const {
            getByText,
            getByPlaceholderText,
            getByTestId
        } = renderedComponent;


        title = 'Test Order of Battle';

        await act(async () => {
            getByText('Crusades!!!');
            const oOBTitle = await getByPlaceholderText('Order Of Battle');
            fireEvent(oOBTitle, 'onChangeText', title);
        });

        await act(async () => {
            const createButton = getByTestId('create-button');
            fireEvent(createButton, 'onPress');
        });
    });

    it('should create a new order of battle with the title provided when the create button is clicked and navigate to the summary page', async () => {
        const {
            queryByDisplayValue,
            queryByText
        } = renderedComponent;

        const oOBHeader = await queryByText('Order of Battle');
        expect(oOBHeader).toBeTruthy();

        const titleInput = await queryByDisplayValue(title);
        expect(titleInput).toBeTruthy();
    });
});

describe('Selecting an order of battle on the home page', () => {
    let renderedComponent,
        title,
        title2;

    beforeEach(async () => {
        const mockStore = configureStore(rootReducer);
        const component = (<Provider store={mockStore}>
            <MainNavigator/>
        </Provider>);

        renderedComponent = render(component);

        const {
            getByPlaceholderText,
            getAllByPlaceholderText,
            getByText,
            getByTestId
        } = renderedComponent;


        title = 'Test Order of Battle';
        title2 = 'Test Other Order of Battle';

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
    });

    it('should navigate to the Order of Battle Summary when a Order is clicked on the home page', async () => {
        const {
            getByText,
            queryByDisplayValue
        } = renderedComponent;

        await act(async () => {
            const oOBList = await getByText(title);
            fireEvent(oOBList, 'onPress');
        });

        const titleInput = await queryByDisplayValue(title);
        expect(titleInput).toBeTruthy();
    });

    it('should prompt to delete the order of battle on a long press', async () => {
        const {
            getByText,
            queryByText
        } = renderedComponent;

        await act(async () => {
            const oOBList = await getByText(title);
            fireEvent(oOBList, 'onOpen', -1, -1, 'right');
        });

        await act(async () => {
            const deleteButton = await getByText('Delete');
            fireEvent(deleteButton, 'onPress');
        });

        const deletePrompt = await queryByText(`Are you sure you want to delete: ${title}?`);
        expect(deletePrompt).toBeTruthy();
    });
});

// describe('and adding a crusade card to the order of battle', () => {
//     it('should create a new crusade card with the provided unit name and and navigate to the summary page', () => {
//         expect(false).toBeTruthy();
//     });
// });
