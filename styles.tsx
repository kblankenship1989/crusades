import {StyleSheet, ColorSchemeName} from 'react-native';
import Colors from './constants/Colors';

export const appStyles = (colorSchemeName : NonNullable<ColorSchemeName>) => {
    const colorScheme = Colors[colorSchemeName];

    return StyleSheet.create({
        textInput: {
            fontSize: 18,
            margin: 10
        },
        button: {
            backgroundColor: colorScheme.button.background,
            justifyContent: 'center',
            alignItems: 'baseline'
        },
        buttonTitle: {
            color: colorScheme.button.titleColor,
            fontSize: 20,
            marginHorizontal: 10
        },
        row: {
            flex: 1,
            flexDirection: 'row'
        }
    });
};
