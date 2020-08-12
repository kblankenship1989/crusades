import React from 'react';
import {render, fireEvent, RenderAPI} from '@testing-library/react-native';
import {HomeScreen, HomeProps} from './home-screen';
import {mockNavigation} from '../../__test_utils__/mockNavigation';
import {mockOrderOfBattle} from '../../__test_utils__/mockStates';
import {factions} from '../types/consts';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

type Test = {
    testProps: HomeProps,
    component: RenderAPI
};

describe('Given the Home Screen', () => {
    const renderComponent = (overrides? : Partial<HomeProps>) : Test => {
        const defaultTestProps : HomeProps = {
            navigation: mockNavigation,
            createOrderOfBattle: jest.fn(),
            ordersOfBattle: [
                mockOrderOfBattle(),
                mockOrderOfBattle()
            ]
        };

        const testProps = {
            ...defaultTestProps,
            ...overrides
        };

        const component = render(<HomeScreen {...testProps} />);

        return {component, testProps};
    };

    it('should render correctly', () => {
        const {component} = renderComponent();

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should disable the create button when the title field is blank', async () => {
        const {component} = renderComponent();

        const titleField = component.getByPlaceholderText('Title');
        expect(titleField.props.value).toStrictEqual('');

        const createButton = await component.getByTestId('create-button');
        expect(createButton.props.accessibilityState.disabled).toBe(true);
    });

    it('should enable the create button once a value is entered into the title and faction fields', async () => {
        const {component, testProps} = renderComponent();

        const title = 'test text';
        const selectedFaction = 'Orks';

        const titleField = component.getByPlaceholderText('Title');
        expect(titleField.props.value).toStrictEqual('');

        fireEvent(titleField, 'onChangeText', title);

        const factionField = component.getByDisplayValue(factions[0]);

        fireEvent(factionField, 'onValueChange', selectedFaction);

        const createButton = await component.getByTestId('create-button');
        expect(createButton.props.accessibilityState.disabled).toBe(false);
        fireEvent(createButton, 'onPress');

        expect(testProps.createOrderOfBattle).toHaveBeenCalledWith(title, selectedFaction);
        expect(testProps.navigation.navigate).toHaveBeenCalledWith('OrderOfBattleSummary');
    });

    it('should clear the title field after clicking the create button', () => {
        const {component} = renderComponent();

        const title = 'test text';

        const titleField = component.getByPlaceholderText('Title');
        expect(titleField.props.value).toStrictEqual('');

        fireEvent(titleField, 'onChangeText', title);
        expect(titleField.props.value).toStrictEqual(title);

        const createButton = component.getByText('Create');
        fireEvent(createButton, 'onPress');

        expect(titleField.props.value).toStrictEqual('');
    });
});
