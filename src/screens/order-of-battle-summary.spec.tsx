import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {render, RenderAPI, fireEvent, act} from '@testing-library/react-native';
import {OrderOfBattleSummary, OrderOfBattleSummaryProps} from './order-of-battle-summary';
import {mockOrderOfBattle} from '../../__test_utils__/mockStates';
import {mockNavigation} from '../../__test_utils__/mockNavigation';
import {factions} from '../types/consts';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

type Test = {
    testProps: OrderOfBattleSummaryProps,
    component: RenderAPI
};

describe('Given the Order of Battle Summary Screen', () => {
    const renderComponent = (overrides? : Partial<OrderOfBattleSummaryProps>) : Test => {
        const defaultTestProps : OrderOfBattleSummaryProps = {
            currentOrderOfBattle: mockOrderOfBattle(),
            navigation: mockNavigation,
            addCrusadeCard: jest.fn(),
            saveCurrentOrderOfBattle: jest.fn()
        };

        const testProps = {
            ...defaultTestProps,
            ...overrides
        };

        const component = render(<OrderOfBattleSummary {...testProps} />);

        return {component, testProps};
    };

    // it('should render correctly', () => {
    //     const {component} = renderComponent();

    //     expect(component.toJSON()).toMatchSnapshot();
    // });

    it('should default to read-only on page load', async() => {
        const {
            component: {
                queryByText,
                queryByTestId
            },
            testProps
        } = renderComponent({
            currentOrderOfBattle: mockOrderOfBattle({
                title: 'Some awesome title',
                faction: factions[3]
            })
        });

        expect(await queryByText(testProps.currentOrderOfBattle.title)).toBeTruthy();
        expect(await queryByTestId('edit-title')).toBeTruthy();
    });

    it('should disable the save button when nothing is changed', async () => {
        const {
            component: {
                queryByText
            }
        } = renderComponent();

        const saveButton = await queryByText('Save');
        expect(saveButton).toBeTruthy();
        expect(saveButton).toBeDisabled();
    });

    it('should enable the save button when the title is changed', async () => {
        const {
            component: {
                getByTestId,
                queryByText,
                getByDisplayValue
            },
            testProps
        } = renderComponent({
            currentOrderOfBattle: mockOrderOfBattle({
                title: 'Some awesome title',
                faction: factions[3]
            })
        });

        expect(await queryByText('Save')).toBeDisabled();

        const editButton = await getByTestId('edit-title');

        act(() => {
            fireEvent(editButton, 'onPress');
        });

        const titleInput = await getByDisplayValue(testProps.currentOrderOfBattle.title);

        act(() => {
            fireEvent(titleInput, 'onChangeText', 'someNewTitle');
        });

        expect(await queryByText('Save')).toBeEnabled();
    });

    it('should enable the save button when the faction is changed', async () => {
        const {
            component: {
                getByTestId,
                queryByText
            },
            testProps
        } = renderComponent({
            currentOrderOfBattle: mockOrderOfBattle({
                title: 'Some awesome title',
                faction: factions[3]
            })
        });

        expect(await queryByText('Save')).toBeDisabled();

        const editButton = await getByTestId('edit-title');

        act(() => {
            fireEvent(editButton, 'onPress');
        });

        const factionPicker = await getByTestId('faction-picker');

        act(() => {
            fireEvent(factionPicker, 'onValueChange', null, 0);
        });

        expect(await queryByText('Save')).toBeEnabled();
    });

    describe('and the save button is clicked', () => {
        it('should save the changes to the order of battle to state and change back to read-only mode', () => {

        });
    });

    describe('and the cancel button is clicked', () => {
        it('should change back to read-only mode and reset the data', () => {

        });
    });

    describe('and the user clicks the button to add a crusade card', () => {
        it('should add a new crusade card to the list', async () => {
            const {component, testProps} = renderComponent();
            const {
                getByTestId
            } = component;

            const addCrusadeCardButton = await getByTestId('add-crusade-card');
            fireEvent(addCrusadeCardButton, 'onPress');

            expect(testProps.addCrusadeCard).toHaveBeenCalled();
        });
    });
});
