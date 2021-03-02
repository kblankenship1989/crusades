import React from 'react';
import {Content, Header, Container, Footer, FooterTab, Button, Text} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {orderOfBattleSummaryConnector} from './order-of-battle-summary-connector';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';
import {RouteProp} from '@react-navigation/native';

export type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.ORDER_OF_BATTLE_SUMMARY>,
    route: RouteProp<RootParamList, Screens.ORDER_OF_BATTLE_SUMMARY>
}

export const OrderOfBattleSummary : React.FC<OrderOfBattleSummaryProps> = ({navigation}) => {
    const navigateToEditOrderOfBattle = () => {
        navigation.push(Screens.EDIT_ORDER_OF_BATTLE, {isNew: false});
    };
    return (
        <Container>
            <Header />
            <Content>
            </Content>
            <Footer>
                <FooterTab>
                    <Button
                        full
                        onPress={navigateToEditOrderOfBattle}
                    >
                        <Text>Save</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};
