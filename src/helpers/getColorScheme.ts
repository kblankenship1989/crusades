import {Appearance, ColorSchemeName} from 'react-native';

export const getColorScheme = () : NonNullable<ColorSchemeName> => {
    return Appearance ? Appearance.getColorScheme() || 'light' : 'light';
};
