import React, {useEffect} from 'react';
import {ImageSourcePropType, Platform} from 'react-native';
import {Button, Text, Thumbnail, View} from 'native-base';
import * as ImagePicker from 'expo-image-picker';

export type ImagePickerButtonProps = {
    imageUri?: string,
    title?: string,
    defaultImage: ImageSourcePropType,
    onImageSelect: (uri: string) => void
}

export const ImagePickerButton : React.FC<ImagePickerButtonProps> = ({imageUri, title, defaultImage, onImageSelect}) : JSX.Element => {
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        if (Platform.OS !== 'web') {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            } else {
                const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });

                console.log(result);

                if (!result.cancelled) {
                    onImageSelect(result.uri);
                }
            }
        }
    };

    return (
        <View>
            <Button onPress={pickImage}>
                <Text>{title || 'Select Image'}</Text>
            </Button>
            {imageUri ? <Thumbnail large source={{uri: imageUri}}/> : <Thumbnail large source={defaultImage}/>}
        </View>
    );
};
