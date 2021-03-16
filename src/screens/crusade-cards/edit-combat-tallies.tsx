import React from 'react';
import {View} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {Screens, RootParamList} from '../../navigation/root-param-list';
import {RouteProp} from '@react-navigation/native';
import {CombatTallies} from '../../redux/state/order-of-battle/crusade-card/combat-tallies';
import {editCombatTalliesConnector} from './edit-combat-tallies-connector';

export type EditCombatTalliesProps = ConnectedProps<typeof editCombatTalliesConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.EDIT_COMBAT_TALLIES>,
    route: RouteProp<RootParamList, Screens.EDIT_COMBAT_TALLIES>
}

type EditCombatTalliesState = CombatTallies;

export class EditCombatTallies extends React.Component<EditCombatTalliesProps, EditCombatTalliesState> {
    constructor(props: EditCombatTalliesProps) {
        super(props);

        this.state = {
            ...props.combatTallies
        };
    }

    render() : React.ReactNode {
        return (
            <View />
        );
    }
}
