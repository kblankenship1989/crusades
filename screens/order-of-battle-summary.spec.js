import React from 'react';
import {render, fireEvent} from "@testing-library/react-native";
import {OrderOfBattleSummary} from './order-of-battle-summary';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Given the Order of Battle Summary Screen', () => {
    const renderComponent = (overrides) => {
        const requiredProps = {
            route: {
                params: {
                    orderOfBattle: {
                        id: '123',
                        title: 'Some cool title',
                        faction: 'Some awesome faction'
                    }
                }
            }
        };

        const optionalProps = {};

        const testProps = {
            ...requiredProps,
            ...optionalProps,
            ...overrides
        };

        const component = render(<OrderOfBattleSummary {...testProps} />);

        return {component, testProps};
    };

    // it('should render correctly', () => {
    //     const {component} = renderComponent();

    //     expect(component.toJSON()).toMatchSnapshot();
    // });

    it('should have an editable field showing the current title', async () => {
        const {component, testProps} = renderComponent();

        const titleInput = await component.getByPlaceholderText('Title');
        expect(titleInput.props.value).toStrictEqual(testProps.route.params.orderOfBattle.title);
    });

    it('should have an editable field showing the current faction', async () => {
        const {component, testProps} = renderComponent();

        const factionInput = await component.getByPlaceholderText('Faction');
        expect(factionInput.props.value).toStrictEqual(testProps.route.params.orderOfBattle.faction);
    });
});
