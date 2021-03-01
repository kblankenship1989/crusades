import React from 'react';
import {Content, Header, Container, Footer, FooterTab, Button, Text, Form} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {orderOfBattleSummaryConnector} from './order-of-battle-summary-connector';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {RouteProp} from '@react-navigation/native';
import {OrderOfBattle} from '../../redux/state/order-of-battle';
import {FactionPicker} from '../../components/faction-picker';
import {Factions} from '../../enums';

export type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.ORDER_OF_BATTLE_SUMMARY>,
    route: RouteProp<RootParamList, Screens.ORDER_OF_BATTLE_SUMMARY>
}

type OrderOfBattleSummaryState = OrderOfBattle & {
    isDirty: boolean,
    isNew: boolean
}

export class OrderOfBattleSummary extends React.Component<OrderOfBattleSummaryProps, OrderOfBattleSummaryState> {
    constructor(props: OrderOfBattleSummaryProps) {
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
        }
    }

    render(): React.ReactNode {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <FactionPicker
                            selectedFaction={this.state.isNew ? undefined : this.state.faction}
                            onChange={this.selectFaction}
                            placeholder={'Select Preferred Faction'}
                        />
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            full
                            onPress={this.save}
                        >
                            <Text>Save</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
