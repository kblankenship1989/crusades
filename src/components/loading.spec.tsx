import React from 'react';
import {render} from '@testing-library/react-native';

import {LoadingGIF} from './loading';

describe('Given the Loading component', () => {
    it('should render correctly', () => {
        const component = (<LoadingGIF />);

        expect(render(component).toJSON()).toMatchSnapshot();
    });
});
