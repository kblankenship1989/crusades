import React from 'react';
import {render, fireEvent, RenderAPI} from "@testing-library/react-native";
import {HomeScreen, HomeProps} from "./home-screen";
import {mockNavigation} from '../../__test_utils__/mockNavigation';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

type Test = {
    testProps: HomeProps,
    component: RenderAPI
};

describe('Given the Home Screen', () => {
    const renderComponent = (overrides? : Partial<HomeProps>) : Test => {
        const defaultTestProps : HomeProps = {
            navigation: mockNavigation
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

    it('should enable the create button once a value is entered into the title field', () => {
        const {component, testProps} = renderComponent();

        const title = 'test text';

        const titleField = component.getByPlaceholderText('Title');
        expect(titleField.props.value).toStrictEqual('');

        fireEvent(titleField, 'onChangeText', title);

        const createButton = component.getByText('Create');
        fireEvent(createButton, 'onPress');


        expect(testProps.navigation.navigate).toHaveBeenCalledWith('OrderOfBattleSummary', {
            orderOfBattleTitle: title
        });
    });

    it('should clear the title field afte clicking the create button', () => {
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
