import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import {BackgroundImageContainer} from '../containers/background-image-container';
import {BattlefieldRoles, Factions} from '../enums';

type BackgroundImageListItemProps = {
    onDelete?: (index: number) => void,
    onPress?: (index: number) => void,
    index: number,
    title: string,
    imageKey: Factions | BattlefieldRoles
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        opacity: 1,
        fontSize: 24
    },
    listItemContainer: {
        flex: 1,
        height: 100,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center'
    }
});

export const BackgroundImageListItem = ({
    onPress,
    onDelete,
    index,
    title,
    imageKey
} : BackgroundImageListItemProps) : JSX.Element => {

    const createConfirmDeleteAlert = () => {
        Alert.alert(
            'Confirm Delete',
            'Are you sure you want to delete this item? There is no undo',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => onDelete && onDelete(index),
                    style: 'destructive'
                }
            ],
            {cancelable: true}
        );

    };

    return (
        <TouchableOpacity
            onPress={() => onPress && onPress(index)}
            onLongPress={onDelete && createConfirmDeleteAlert}
            style={styles.listItemContainer}
        >
            <BackgroundImageContainer
                containerStyle={styles.imageContainer}
                imageKey={imageKey}
            >
                <Text style={styles.title}>
                    {title}
                </Text>
            </BackgroundImageContainer>
        </TouchableOpacity>
    );
};
