import {StyleSheet, ColorSchemeName} from 'react-native';
import Colors from './src/constants/Colors';

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
        },
        picker: {
            fontSize: 18,
            marginHorizontal: 10,
            flex: 1
        },
        pickerRow: {
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10
        },
        swipeOutBackText: {
            color: colorScheme.text
        },
        swipeOutRowFront: {
            alignItems: 'center',
            backgroundColor: colorScheme.background,
            borderBottomColor: Colors.bottomBorder,
            borderBottomWidth: 1,
            justifyContent: 'center',
            height: 50,
        },
        swipeOutRowBack: {
            alignItems: 'center',
            backgroundColor: Colors.deleteColor,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 15,
        },
        swipeoutBackRightBtn: {
            backgroundColor: Colors.deleteColor,
            right: 0,
            alignItems: 'center',
            bottom: 0,
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            width: 75
        }
    });
};
