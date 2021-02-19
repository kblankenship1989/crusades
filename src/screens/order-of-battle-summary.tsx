import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {FactionPicker} from '../components/faction-picker';
import {RequisitionPointsSelector} from '../components/requisition-points-selector';
import {TitleInput} from '../components/title-input';
import {ActionFixedFooterContainer} from '../containers/action-fixed-footer-container';
import {StackNavigationProp} from '@react-navigation/stack';
import {ConnectedProps} from 'react-redux';
import {orderOfBattleSummaryConnector} from './order-of-battle-summary-connector';

type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, 'OrderOfBattleSummary'>
}

export const OrderOfBattleSummary : React.FC<OrderOfBattleSummaryProps> = ({
    currentOrderOfBattle,
    saveCurrentOrderOfBattle
}) => {
    const [title, setTitle] = React.useState(currentOrderOfBattle.title);
    const [faction, setFaction] = React.useState(currentOrderOfBattle.faction);
    const [requisitionPoints, setRequisitionPoints] = React.useState(currentOrderOfBattle.requisitionPoints);

    const save = () => {
        saveCurrentOrderOfBattle({
            title,
            faction,
            requisitionPoints
        });
    };

    return (
        <ActionFixedFooterContainer
            onSave={save}
        >
            <ScrollView>
                <TitleInput
                    value={title}
                    placeholder={'Order Of Battle'}
                    onChangeText={setTitle}
                />
                <FactionPicker
                    selectedFaction={faction}
                    onChange={setFaction}
                />
                <RequisitionPointsSelector
                    currentPoints={requisitionPoints}
                    onChange={setRequisitionPoints}
                />
            </ScrollView>
        </ActionFixedFooterContainer>
    );
};
