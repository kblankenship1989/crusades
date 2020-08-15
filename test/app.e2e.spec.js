// import React from 'react';
// import {fireEvent, render, waitFor, waitForElementToBeRemoved} from '@testing-library/react-native';
// import {App} from '../src/App';

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// describe('Creating an Order of Battle', () => {
//     it('should create a new order of battle with the title provided when the create button is clicked and navigate to the summary page', async () => {
//         const component = (<App/>);

//         const {
//             queryByText,
//             getByPlaceholderText,
//             getByDisplayValue,
//             getByText,
//             queryByDisplayValue,
//             queryByPlaceholderText,
//             debug
//         } = render(component);


//         const title = 'Test Order of Battle';

//         await waitFor(() => queryByText('Crusades!!!'));
//         await waitFor(() => queryByPlaceholderText('Order Of Battle'));
//         debug();
//         const oOBTitle = await getByPlaceholderText('Order Of Battle');
//         fireEvent(oOBTitle, 'onChangeText', title);

//         const input = await getByDisplayValue(title);
//         expect(input).toStrictEqual(oOBTitle);

//         const createButton = getByText('Create');
//         fireEvent(createButton, 'onPress');

//         const oOBHeader = await queryByText('Order of Battle');
//         expect(oOBHeader).toBeTruthy();

//         const titleInput = await queryByDisplayValue(title);
//         expect(titleInput).toBeTruthy();
//     });

//     it('should show the list of Orders of Battle on the home page', async () => {
//         const component = (<App/>);

//         const {
//             queryByText,
//             getByPlaceholderText,
//             getByText,
//             getByTestId,
//             queryByPlaceholderText
//         } = render(component);


//         const title = 'Test Order of Battle';

//         await waitFor(() => queryByText('Crusades!!!'));
//         await waitFor(() => queryByPlaceholderText('Order Of Battle'));
//         const oOBTitle = await getByPlaceholderText('Order Of Battle');
//         fireEvent(oOBTitle, 'onChangeText', title);

//         const createButton = getByText('Create');
//         fireEvent(createButton, 'onPress');

//         await waitFor(() => queryByText('Order of Battle'));

//         const backButton = await getByTestId('header-back');
//         fireEvent(backButton, 'onPress');

//         await waitForElementToBeRemoved(() => queryByText('Order of Battle'));

//         const clearedTitle = await queryByPlaceholderText('Order Of Battle');
//         expect(clearedTitle.props.value).toStrictEqual('');

//         const oOBList = await queryByText(title);
//         expect(oOBList).toBeTruthy();
//     });

//     it('should navigate to the Order of Battle Summary when a Order is clicked on the home page', async () => {
//         const component = (<App/>);

//         const {
//             queryByText,
//             getByPlaceholderText,
//             getByText,
//             getByTestId,
//             queryByDisplayValue
//         } = render(component);


//         const title = 'Test Order of Battle';

//         await waitFor(() => queryByText('Crusades!!!'));
//         const oOBTitle = await getByPlaceholderText('Order Of Battle');
//         fireEvent(oOBTitle, 'onChangeText', title);

//         const createButton = getByText('Create');
//         fireEvent(createButton, 'onPress');

//         await waitFor(() => queryByText('Order of Battle'));

//         const backButton = await getByTestId('header-back');
//         fireEvent(backButton, 'onPress');

//         await waitForElementToBeRemoved(() => queryByText('Order of Battle'));

//         const oOBList = await getByText(title);
//         fireEvent(oOBList, 'onPress');

//         const oOBHeader = await queryByText('Order of Battle');
//         expect(oOBHeader).toBeTruthy();

//         const titleInput = await queryByDisplayValue(title);
//         expect(titleInput).toBeTruthy();
//     });

//     // describe('and adding a crusade card to the order of battle', () => {
//     //     it('should create a new crusade card with the provided unit name and and navigate to the summary page', () => {
//     //         expect(false).toBeTruthy();
//     //     });
//     // });
// });
