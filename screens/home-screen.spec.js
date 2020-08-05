import React from 'react';
import {render, fireEvent} from "@testing-library/react-native";
import {HomeScreen} from "./home-screen";
import {v4} from 'uuid';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('uuid');

const testId = '123';
v4.mockReturnValue(testId);

describe('Given the Home Screen', () => {
    const renderComponent = (overrides) => {
        const requiredProps = {
            navigation: {
                navigate: jest.fn()
            }
        };

        const optionalProps = {};

        const testProps = {
            ...requiredProps,
            ...optionalProps,
            ...overrides
        };

        const component = render(<HomeScreen {...testProps} />);

        return {component, testProps};
    };

    it('should render correctly', () => {
        const {component} = renderComponent();

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should disable the create button when the title field is blank', () => {
        const {component, testProps} = renderComponent();

        const titleField = component.getByPlaceholderText('Title');
        expect(titleField.props.value).toStrictEqual('');

        const createButton = component.getByTestId('create-button');
        fireEvent(createButton, 'onPress');

        expect(testProps.navigation.navigate).not.toHaveBeenCalled();
    });

    it('should enable the create button once a value is entered into the title field', () => {
        const {component, testProps} = renderComponent();

        const title = 'test text';

        const titleField = component.getByPlaceholderText('Title');
        expect(titleField.props.value).toStrictEqual('');

        fireEvent(titleField, 'onChangeText', title);

        const createButton = component.getByTestId('create-button');
        fireEvent(createButton, 'onPress');

        const expectedOrderOfBattle = {
            id: testId,
            title,
            faction: ''
        };

        expect(testProps.navigation.navigate).toHaveBeenCalledWith('OrderOfBattleSummary', {
            orderOfBattle: expectedOrderOfBattle
        });
    });

    it('should clear the title field afte clicking the create button', () => {
        const {component} = renderComponent();

        const title = 'test text';

        const titleField = component.getByPlaceholderText('Title');
        expect(titleField.props.value).toStrictEqual('');

        fireEvent(titleField, 'onChangeText', title);
        expect(titleField.props.value).toStrictEqual(title);

        const createButton = component.getByTestId('create-button');
        fireEvent(createButton, 'onPress');

        expect(titleField.props.value).toStrictEqual('');
    });
});
