import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {RequisitionPointsSelector, RequisitionPointsSelectorProps} from './requisition-points-selector';
import {render} from '@testing-library/react-native';

describe('Given the Requisition points selector', () => {
    it('should render correctly', () => {
        const testProps : RequisitionPointsSelectorProps = {
            currentPoints: 3,
            updateRequisitionPoints: jest.fn()
        };
        const component = (<RequisitionPointsSelector
            {...testProps}
        />);
        expect(render(component).toJSON()).toMatchSnapshot();
    });

    describe('and a requisition point value of 5', () => {
        it('should disable the incrementor button', async () => {
            const testProps : RequisitionPointsSelectorProps = {
                currentPoints: 5,
                updateRequisitionPoints: jest.fn()
            };
            const component = (<RequisitionPointsSelector
                {...testProps}
            />);

            const {
                getByText,
                queryByA11yLabel
            } = render(component);

            expect(await getByText('+')).toBeDisabled();
            expect(await getByText('-')).toBeEnabled();
            expect(await queryByA11yLabel('Current Points: 5/5')).toBeTruthy();
        });
    });

    describe('and a requisition point value of 0', () => {
        it('should disable the decrementor button', async () => {
            const testProps : RequisitionPointsSelectorProps = {
                currentPoints: 0,
                updateRequisitionPoints: jest.fn()
            };
            const component = (<RequisitionPointsSelector
                {...testProps}
            />);

            const {
                getByText,
                queryByA11yLabel
            } = render(component);

            expect(await getByText('+')).toBeEnabled();
            expect(await getByText('-')).toBeDisabled();
            expect(await queryByA11yLabel('Current Points: 0/5')).toBeTruthy();
        });
    });

    describe('and a requisition point value between 1 and 4', () => {
        it('should enable both the incrementor and decrementor buttons', async () => {
            const testProps : RequisitionPointsSelectorProps = {
                currentPoints: 4,
                updateRequisitionPoints: jest.fn()
            };
            const component = (<RequisitionPointsSelector
                {...testProps}
            />);

            const {
                getByText,
                queryByA11yLabel
            } = render(component);

            expect(await getByText('+')).toBeEnabled();
            expect(await getByText('-')).toBeEnabled();
            expect(await queryByA11yLabel('Current Points: 4/5')).toBeTruthy();
        });
    });
});
