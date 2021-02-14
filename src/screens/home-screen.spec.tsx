import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {render, fireEvent, RenderAPI} from '@testing-library/react-native';
import {HomeScreen} from './home-screen';
import {mockNavigation} from '../../__test_utils__/mockNavigation';
import {mockOrderOfBattle} from '../../__test_utils__/mockStates';
import {factions} from '../types/consts';
import {HomeProps} from '../types/screens/props';

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
            loadSelectedOrderOfBattle: jest.fn(),
            deleteSelectedOrderOfBattle: jest.fn(),
            ordersOfBattle: [
                mockOrderOfBattle({
                    id: 7,
                    title: 'title 1'
                }),
                mockOrderOfBattle({
                    id: 9,
                    title: 'title 2'
                })
            ]
        };

        const testProps = {
            ...defaultTestProps,
            ...overrides
        };

        const component = render(<HomeScreen {...testProps} />);

        return {component, testProps};
    };

    // it('should render correctly', () => {
    //     const {component} = renderComponent();

    //     expect(component.toJSON()).toMatchSnapshot();
    // });

    describe('and there are no orders of battle available', () => {
        it('should display a message telling the using to add a new order of battle', async () => {
            const {component} = renderComponent({
                ordersOfBattle: []
            });

            expect(await component.getByText('Click + ADD to create a new Crusade Force')).toBeTruthy();
        });
    });

    describe('and the ADD button is clicked', () => {
        it('should create a new order of battle', async () => {
            const {component, testProps} = renderComponent();

            const addButton = await component.getByText('ADD');

            fireEvent(addButton, 'onPress');

            expect(testProps.createOrderOfBattle).toHaveBeenCalledTimes(1);
        });

        it('should navigate to the order of battle summary page', async () => {
            const {component, testProps} = renderComponent({
                navigation: {
                    ...mockNavigation,
                    push: jest.fn()
                }
            });

            const addButton = await component.getByText('ADD');

            fireEvent(addButton, 'onPress');

            expect(testProps.navigation.push).toHaveBeenCalledTimes(1);
            expect(testProps.navigation.push).toHaveBeenCalledWith('OrderOfBattleSummary');
        });
    });
});
