import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import {BackgroundImageContainer} from '../containers/background-image-container';
import {BattlefieldRoles, Factions} from '../types/enums';

type BackgroundImageListItemProps = {
    onDelete: (index: number) => void,
    onPress: (index: number) => void,
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
        flex: 1
    },
    imageContainer: {
        flex: 1
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
                    onPress: () => onDelete(index),
                    style: 'destructive'
                }
            ],
            {cancelable: true}
        );

    };

    return (
        <TouchableOpacity
            onPress={() =>  onPress(index)}
            onLongPress={createConfirmDeleteAlert}
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
