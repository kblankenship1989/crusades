import React from 'react';
import {Container, Fab, Icon, Stack} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {editOrderOfBattleConnector} from './edit-order-of-battle-connector';
import {RouteProp} from '@react-navigation/native';
import {OrderOfBattle} from '../../redux/state/order-of-battle';
import {FactionPicker} from '../../components/faction-picker';
import {Factions} from '../../enums';
import {TextInput} from '../../components/text-input';
import {QuantitySelector} from '../../components/quantity-selector';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {AppHeader} from '../../components/app-header';

export type EditOrderOfBattleProps = ConnectedProps<typeof editOrderOfBattleConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.EDIT_ORDER_OF_BATTLE>,
    route: RouteProp<RootParamList, Screens.EDIT_ORDER_OF_BATTLE>
}

type EditOrderOfBattleState = OrderOfBattle & {
    isDirty: boolean,
    isNew: boolean
}

type NumberFields = 'requisitionPoints' | 'supplyLimit'

export class EditOrderOfBattle extends React.Component<EditOrderOfBattleProps, EditOrderOfBattleState> {
    constructor(props: EditOrderOfBattleProps) {
        super(props);

        this.state = {
            ...props.orderOfBattle,
            isDirty: props.route.params.isNew,
            isNew: props.route.params.isNew
        };
    }

    selectFaction = (preferredFaction: Factions) : void => {
        this.setState(prevState => ({
            ...prevState,
            preferredFaction,
            isDirty: true,
            isNew: false
        }));
    }

    setTitle = (title: string) : void => {
        this.setState(prevState => ({
            ...prevState,
            title,
            isDirty: true
        }));
    }

    setNumber = (field: NumberFields) => (value: number) : void => {
        this.setState(prevState => ({
            ...prevState,
            [field]: value,
            isDirty: true
        }));
    }

    save = () : void => {
        const {
            isDirty,
            isNew,
            ...orderOfBattle
        } = this.state;

        if (isDirty) {
            this.props.saveOrderOfBattle(this.props.selectedOrderOfBattleId, orderOfBattle);
            this.setState(prevState => ({
                ...prevState,
                isDirty: false,
                isNew: false
            }));

            const newScreen = this.props.route.params.isNew ? Screens.CRUSADE_CARDS : Screens.ORDER_OF_BATTLE_SUMMARY;
            this.props.navigation.replace(newScreen);
        }
    }

    render(): React.ReactNode {
        return (
            <Container>
                <AppHeader title={'Edit Order of Battle'} />
                <Stack space={4} w={'80%'}>
                    <TextInput
                        label={'Title'}
                        value={this.state.title}
                        onChangeText={this.setTitle}
                    />
                    <FactionPicker
                        selectedFaction={this.state.isNew ? undefined : this.state.faction}
                        onChange={this.selectFaction}
                        placeholder={'Select Faction'}
                        title={'Faction'}
                    />
                    <QuantitySelector
                        title={'Requisition Points'}
                        min={0}
                        max={5}
                        multiplier={1}
                        onQuantityChange={this.setNumber('requisitionPoints').bind(this)}
                        selectedValue={this.state.requisitionPoints}
                    />
                    <QuantitySelector
                        title={'Supply Limit'}
                        min={50}
                        max={200}
                        multiplier={5}
                        onQuantityChange={this.setNumber('supplyLimit').bind(this)}
                        selectedValue={this.state.supplyLimit}
                    />
                </Stack>
                <Fab
                    placement={'bottom-right'}
                    onPress={this.save}>
                    <Icon as={<MaterialCommunityIcons name={'content-save'}/>}/>
                </Fab>
            </Container>
        );
    }
}
