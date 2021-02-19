import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
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
    }
});

export const BackgroundImageListItem = ({
    onPress,
    onDelete,
    index,
    title,
    imageKey
} : BackgroundImageListItemProps) : JSX.Element => {

    const confirmDelete = () => {
        onDelete(index);
    };

    return (
        <TouchableOpacity
            onPress={() =>  onPress(index)}
            onLongPress={confirmDelete}
            style={styles.listItemContainer}
        >
            <BackgroundImageContainer
                containerStyle={{
                    flex: 1
                }}
                imageKey={imageKey}
            >
                <Text style={styles.title}>
                    {title}
                </Text>
            </BackgroundImageContainer>
        </TouchableOpacity>
    );
};
