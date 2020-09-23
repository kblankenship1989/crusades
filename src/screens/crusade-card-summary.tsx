import React from 'react';
import {View} from 'react-native';
import {CrusadeCard} from '../redux/types/crusade-card';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '../navigation/root-param-list';
import {ConnectedProps} from 'react-redux';
import {crusadeCardSummaryConnector} from './crusade-card-summary-connector';

type CrusadeCardSummaryState = CrusadeCard & {
    isDirty: boolean,
    isEditing: boolean
}

export type CrusadeCardSummaryProps = ConnectedProps<typeof crusadeCardSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, 'CrusadeCardSummary'>
};


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
