import React from 'react';
import {View} from 'react-native';
import {ConnectedProps} from 'react-redux';
import {crusadeCardSummaryConnector} from './crusade-card-summary-connector';
import {RootParamList} from '../types/root-param-list';
import {StackNavigationProp} from '@react-navigation/stack';
import {CrusadeCard} from '../types/state/crusade-card';

type CrusadeCardSummaryProps = ConnectedProps<typeof crusadeCardSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, 'CrusadeCardSummary'>
}

type CrusadeCardSummaryState = CrusadeCard & {
    isDirty: boolean,
    isEditing: boolean
}
export class CrusadeCardSummary extends React.Component<CrusadeCardSummaryProps, CrusadeCardSummaryState> {
    constructor(props : CrusadeCardSummaryProps) {
        super(props);

        this.state = {
            ...props.currentCrusadeCard,
            isDirty: false,
            isEditing: false
        };
    }

    render() : JSX.Element {
        return <View/>;
    }
}
