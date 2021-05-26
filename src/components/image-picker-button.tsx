import React, {useEffect} from 'react';
import {ImageSourcePropType, Platform} from 'react-native';
import {Avatar, Button, VStack} from 'native-base';
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

    const source = imageUri ? {uri: imageUri} : defaultImage;

    return (
        <VStack space={2} alignItems={'center'}>
            <Button onPress={pickImage}>
                {title || 'Select Image'}
            </Button>
            <Avatar size={'lg'} source={source}/>
        </VStack>
    );
};
