import {StackNavigationProp} from '@react-navigation/stack';

export const mockNavigation : StackNavigationProp<RootParamList, any> = {
    navigate: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn(),
    canGoBack: jest.fn(),
    reset: jest.fn(),
    isFocused: jest.fn(),
    dangerouslyGetParent: jest.fn(),
    dangerouslyGetState: jest.fn(),
    setParams: jest.fn(),
    setOptions: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    replace: jest.fn(),
    push: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn()
};
