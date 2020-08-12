import React from 'react';
import {ConnectedProps} from 'react-redux';

import {View} from 'react-native';
import {RequisitionPointsSelector} from '../components/requisition-points-selector';
import {orderOfBattleSummaryConnector} from './order-of-battle-summary-connector';
import {TitleInput} from '../components/title-input';
import {FactionPicker} from '../components/faction-picker';
import {factions} from '../types/consts';
import {OrderOfBattle} from '../redux/types/order-of-battle';

type OrderOfBattleSummaryState = OrderOfBattle & {
    isDirty: boolean
}

export type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector>;

export class OrderOfBattleSummary extends React.Component<OrderOfBattleSummaryProps, OrderOfBattleSummaryState> {
    constructor(props : OrderOfBattleSummaryProps) {
        super(props);

        this.state = {
            ...props.currentOrderOfBattle,
            isDirty: false
        };
    }

    render() : JSX.Element {
        return (
            <View>
                <TitleInput
                    value={this.state.title}
                    onChangeText={(title) => this.setState({title, isDirty: true})}
                    placeholder={'Order Of Battle'}
                />
                <FactionPicker
                    selectedFaction={this.state.faction}
                    onValueChange={(itemValue, itemIndex) => this.setState({faction: factions[itemIndex], isDirty: true})}
                />

                <RequisitionPointsSelector
                    currentPoints={this.state.requisitionPoints}
                />
            </View>
        );
    }
}
