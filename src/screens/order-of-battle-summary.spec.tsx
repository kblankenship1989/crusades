import React from 'react';
import {render, RenderAPI} from "@testing-library/react-native";
import {OrderOfBattleSummary, OrderOfBattleSummaryProps} from './order-of-battle-summary';
import {mockOrderOfBattle} from '../../__test_utils__/mockStates';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

type Test = {
    testProps: OrderOfBattleSummaryProps,
    component: RenderAPI
};

const defaultTestProps : OrderOfBattleSummaryProps = {
    ordersOfBattle: [
        mockOrderOfBattle()
    ],
    route: {
        key: 'some-key',
        name: 'OrderOfBattleSummary',
        params: {
            orderOfBattleTitle:  'Some cool title'
        }
    }
};

describe('Given the Order of Battle Summary Screen', () => {
    const renderComponent = (testProps : OrderOfBattleSummaryProps) : Test => {
        const component = render(<OrderOfBattleSummary {...testProps} />);

        return {component, testProps};
    };

    // it('should render correctly', () => {
    //     const {component} = renderComponent();

    //     expect(component.toJSON()).toMatchSnapshot();
    // });

    it('should have an editable field showing the current title', async () => {
        const {component, testProps} = renderComponent(defaultTestProps);

        const titleInput = await component.getByPlaceholderText('Title');
        expect(titleInput.props.value).toStrictEqual(testProps.route.params.orderOfBattleTitle);
    });

    it('should have an editable field showing the current faction', async () => {
        const {component, testProps} = renderComponent(defaultTestProps);

        const factionInput = await component.getByPlaceholderText('Faction');
        expect(factionInput.props.value).toStrictEqual(testProps.ordersOfBattle[0].faction);
    });
});
