import React from 'react';
import {ConnectedProps} from 'react-redux';

import {View, TouchableOpacity, ScrollView, Button} from 'react-native';
import {RequisitionPointsSelector} from '../components/requisition-points-selector';
import {orderOfBattleSummaryConnector} from './order-of-battle-summary-connector';
import {TitleInput} from '../components/title-input';
import {FactionPicker} from '../components/faction-picker';
import {factions} from '../types/consts';
import {OrderOfBattle} from '../redux/types/order-of-battle';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList} from '../navigation/root-param-list';
import {Icon} from 'react-native-elements';

type OrderOfBattleSummaryState = OrderOfBattle & {
    isDirty: boolean,
}

export type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, 'OrderOfBattleSummary'>
};

export class OrderOfBattleSummary extends React.Component<OrderOfBattleSummaryProps, OrderOfBattleSummaryState> {
    constructor(props : OrderOfBattleSummaryProps) {
        super(props);

        this.state = {
            ...props.currentOrderOfBattle,
            isDirty: false
        };
    }

    handleBack = () : void => {
        if (this.props.navigation.canGoBack()) {
            this.props.navigation.goBack();
        }
    }

    render() : JSX.Element {
        return (
            <View style={{
                flex: 1
            }}>
                <ScrollView>
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
                </ScrollView>
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    flex: 1,
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <Button
                        onPress={this.handleBack}
                        title={'Cancel'}
                        testID={'order-of-battle-cancel'}
                    >
                        <Icon
                            name={'window-close'}
                            size={20}
                            type={'font-awesome'}
                        />
                    </Button>
                </View>
            </View>
        );
    }
}
