import React from 'react';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {LoadingGIF} from './components/loading';
import {AppProvider} from './main/AppProvider';
import {Main} from './main/Main';

type AppState = {
    isReady: boolean
}
export class App extends React.Component<Record<string, unknown>, AppState> {
    constructor(props : Record<string, unknown>) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() : Promise<void> {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({isReady: true});
    }

    render() : React.ReactNode {
        if (!this.state.isReady) {
            return <LoadingGIF/>;
        }
        return (
            <AppProvider>
                <Main/>
            </AppProvider>
        );
    }
}
