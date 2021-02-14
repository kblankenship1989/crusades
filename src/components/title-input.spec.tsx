import React from 'react';
import {render} from '@testing-library/react-native';

import {TitleInput, TitleInputProps} from './title-input';


describe('Given the Title Input component', () => {
    describe('And a placeholder value is provided', () => {
        it('should render an input with the provided placeholder text', async () => {
            const testProps : TitleInputProps = {
                placeholder: 'Some placeholder text',
                value: 'Some title',
                onChangeText: jest.fn()
            };
            const component = (<TitleInput
                {...testProps}
            />);
            const {
                queryByPlaceholderText
            } = render(component);

            expect(await queryByPlaceholderText(testProps.placeholder)).toBeTruthy();
        });
    });

    it('should render the component correctly', () => {
        const testProps : TitleInputProps = {
            placeholder: 'Some placeholder text',
            value: 'Some title',
            onChangeText: jest.fn()
        };
        const component = (<TitleInput
            {...testProps}
        />);
        expect(render(component).toJSON()).toMatchSnapshot();
    });
});
