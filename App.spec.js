import * as React from 'react';
import renderer from 'react-test-renderer';

import App from './App.tsx';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

jest.mock('./hooks/useCachedResources');
jest.mock('./hooks/useColorScheme');

useCachedResources.mockReturnValue(true);

it(`renders correctly`, () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
});

it('should render the main home component', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree.type).toStrictEqual(Main);
});
