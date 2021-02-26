import * as Font from 'expo-font';
import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {Ionicons} from '@expo/vector-icons';

export const useCachedResources = () : boolean => {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    Roboto: require('../assets/Fonts/Roboto.ttf'),
                    Roboto_medium: require('../assets/Fonts/Roboto_medium.ttf'),
                    ...Ionicons.font
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
};
