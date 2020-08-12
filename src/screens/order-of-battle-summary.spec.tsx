import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import {OrderOfBattleSummary, OrderOfBattleSummaryProps} from './order-of-battle-summary';
import {mockOrderOfBattle} from '../../__test_utils__/mockStates';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

type Test = {
    testProps: OrderOfBattleSummaryProps,
    component: RenderAPI
};

describe('Given the Order of Battle Summary Screen', () => {
    const renderComponent = (overrides? : Partial<OrderOfBattleSummaryProps>) : Test => {
        const defaultTestProps : OrderOfBattleSummaryProps = {
            currentOrderOfBattle: mockOrderOfBattle(),
            dispatch: jest.fn()
        };

        const testProps = {
            ...defaultTestProps,
            ...overrides
        };

        const component = render(<OrderOfBattleSummary {...testProps} />);

        return {component, testProps};
    };

    it('should render correctly', () => {
        const {component} = renderComponent();

        expect(component.toJSON()).toMatchSnapshot();
    });
});
