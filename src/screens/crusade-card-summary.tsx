import React from 'react';
import {View} from 'react-native';
import {CrusadeCardSummaryProps} from '../types/screens/props';
import {CrusadeCardSummaryState} from '../types/screens/states';


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
