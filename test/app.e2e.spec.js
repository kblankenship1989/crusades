import React from 'react';
import {fireEvent, render, act} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {MainNavigator} from '../src/navigation/main-navigator';
import {rootReducer} from '../src/redux/reducers';
import {configureStore} from '../src/redux/store';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Creating an Order of Battle', () => {
    let renderedComponent;

    beforeEach(async () => {
        const mockStore = configureStore(rootReducer);
        const component = (
            <Provider store={mockStore}>
                <MainNavigator/>
            </Provider>);

        renderedComponent = render(component);

        const {
            getByText
        } = renderedComponent;


        await act(async () => {
            getByText('Crusades!!!');
        });

        await act(async () => {
            const addButton = getByText('ADD');
            fireEvent(addButton, 'onPress');
        });
    });

    it('should create a new order of battle when the create button is clicked and navigate to the summary page', async () => {
        const {
            queryByText
        } = renderedComponent;

        const oOBHeader = await queryByText('Order of Battle');
        expect(oOBHeader).toBeTruthy();
    });
});

// describe('Selecting an order of battle on the home page', () => {
//     let renderedComponent,
//         title,
//         title2;

//     beforeEach(async () => {
//         const mockStore = configureStore(rootReducer);
//         const component = (<Provider store={mockStore}>
//             <MainNavigator/>
//         </Provider>);

//         renderedComponent = render(component);

//         const {
//             getByPlaceholderText,
//             getAllByPlaceholderText,
//             getByText,
//             getByTestId
//         } = renderedComponent;


//         title = 'Test Order of Battle';
//         title2 = 'Test Other Order of Battle';

//         await act(async () => {
//             getByText('Crusades!!!');
//             const oOBTitle = await getByPlaceholderText('Order Of Battle');
//             fireEvent(oOBTitle, 'onChangeText', title);
//         });

//         await act(async () => {
//             const createButton = await getByTestId('create-button');
//             fireEvent(createButton, 'onPress');
//         });

//         await act(async () => {
//             const cancelButton = await getByTestId('footer-cancel');
//             fireEvent(cancelButton, 'onPress');
//         });

//         await act(async () => {
//             const oOBTitle = await getAllByPlaceholderText('Order Of Battle');
//             fireEvent(oOBTitle[0], 'onChangeText', title2);
//         });

//         await act(async () => {
//             const createButton = await getByTestId('create-button');
//             fireEvent(createButton, 'onPress');
//         });

//         await act(async () => {
//             const cancelButton = await getByTestId('footer-cancel');
//             fireEvent(cancelButton, 'onPress');
//         });
//     });

//     it('should navigate to the Order of Battle Summary when a Order is clicked on the home page', async () => {
//         const {
//             getByText,
//             queryAllByText
//         } = renderedComponent;

//         await act(async () => {
//             const oOBList = await getByText(title);
//             fireEvent(oOBList, 'onPress');
//         });

//         const titleInput = await queryAllByText(title);
//         expect(titleInput[0]).toBeTruthy();
//     });
// });

// describe('and adding a crusade card to the order of battle', () => {
//     it('should create a new crusade card with the provided unit name and and navigate to the summary page', () => {
//         expect(false).toBeTruthy();
//     });
// });
