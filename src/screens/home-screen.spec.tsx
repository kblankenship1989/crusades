// import React from 'react';
// import '@testing-library/jest-native/extend-expect';
// import {render, fireEvent, RenderAPI} from '@testing-library/react-native';
// import {HomeScreen, HomeProps} from './home-screen';
// import {mockNavigation} from '../../__test_utils__/mockNavigation';
// import {mockOrderOfBattle} from '../../__test_utils__/mockStates';
// import {factions} from '../types/consts';

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// type Test = {
//     testProps: HomeProps,
//     component: RenderAPI
// };

// describe('Given the Home Screen', () => {
//     const renderComponent = (overrides? : Partial<HomeProps>) : Test => {
//         const defaultTestProps : HomeProps = {
//             navigation: mockNavigation,
//             createOrderOfBattle: jest.fn(),
//             loadSelectedOrderOfBattle: jest.fn(),
//             deleteSelectedOrderOfBattle: jest.fn(),
//             ordersOfBattle: [
//                 mockOrderOfBattle({
//                     title: 'title 1'
//                 }),
//                 mockOrderOfBattle({
//                     title: 'title 2'
//                 })
//             ]
//         };

//         const testProps = {
//             ...defaultTestProps,
//             ...overrides
//         };

//         const component = render(<HomeScreen {...testProps} />);

//         return {component, testProps};
//     };

//     // it('should render correctly', () => {
//     //     const {component} = renderComponent();

//     //     expect(component.toJSON()).toMatchSnapshot();
//     // });

//     it('should disable the create button when the title field is blank', async () => {
//         const {component} = renderComponent();

//         const titleField = component.getByPlaceholderText('Order Of Battle');
//         expect(titleField.props.value).toStrictEqual('');

//         const createButton = await component.getByTestId('create-button');
//         expect(createButton).toBeDisabled();
//     });

//     it('should enable the create button once a value is entered into the title and faction fields', async () => {
//         const {component} = renderComponent();

//         const title = 'test text';
//         const selectedFactionIndex = 6;
//         const selectedFaction = factions[selectedFactionIndex];

//         const titleField = component.getByPlaceholderText('Order Of Battle');
//         expect(titleField.props.value).toStrictEqual('');

//         fireEvent(titleField, 'onChangeText', title);

//         expect(await component.getByDisplayValue(title)).toBeTruthy();

//         const factionField = await component.getByTestId('faction-picker');

//         fireEvent(factionField, 'onValueChange', selectedFaction, selectedFactionIndex);

//         expect(await component.getByTestId('faction-picker')).toHaveProp('selectedIndex', selectedFactionIndex);

//         const createButton = await component.getByTestId('create-button');
//         expect(createButton).not.toBeDisabled();
//     });
// });
