import React from 'react';
import {ActionFixedFooterContainer} from '../containers/action-fixed-footer-container';

export type AccountSettingsProps = {
    selectedPlayer: Player,
    updatePlayer: (updates: Player) => void
}

type AccountSettingsState = Player & {
    isDirty: boolean
}

export class AccountSettings extends React.Component<AccountSettingsProps, AccountSettingsState> {
    render() : React.ReactNode {
        return (
            <ActionFixedFooterContainer>

            </ActionFixedFooterContainer>
        );
    }
}
