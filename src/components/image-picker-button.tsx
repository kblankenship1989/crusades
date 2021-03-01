import React, {useState, useEffect} from 'react';
import {ImageSourcePropType, Platform} from 'react-native';
import {Button, Text, Thumbnail, View} from 'native-base';
import * as ImagePicker from 'expo-image-picker';

export type ImagePickerButtonProps = {
    imageUri?: string,
    title?: string,
    defaultImage: ImageSourcePropType
}

export const ImagePickerButton : React.FC<ImagePickerButtonProps> = ({imageUri, title, defaultImage}) : JSX.Element => {
    const [image, setImage] = useState<string | undefined>(imageUri);

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
                    setImage(result.uri);
                }
            }
        }
    };

    return (
        <View>
            <Button onPress={pickImage}>
                <Text>{title || 'Select Image'}</Text>
            </Button>
            {image ? <Thumbnail large source={{uri: image}}/> : <Thumbnail large source={defaultImage}/>}
        </View>
    );
};
