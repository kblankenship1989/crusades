import React from 'react';
import {FactionPicker} from '../components/faction-picker';
import {TitleInput} from '../components/title-input';
import {ActionFixedFooterContainer} from '../containers/action-fixed-footer-container';
import {OrderOfBattleSummaryProps} from '../types/screens/props';

export const OrderOfBattleSummary : React.FC<OrderOfBattleSummaryProps> = ({
    currentOrderOfBattle,
    saveCurrentOrderOfBattle
}) => {
    const [title, setTitle] = React.useState(currentOrderOfBattle.title);
    const [faction, setFaction] = React.useState(currentOrderOfBattle.faction);
    return (
        <ActionFixedFooterContainer>
            <TitleInput
                value={title}
                placeholder={'Order Of Battle'}
                onChangeText={setTitle}
            />
            <FactionPicker
                selectedFaction={faction}
                onChange={setFaction}
            />
        </ActionFixedFooterContainer>
    );
};
