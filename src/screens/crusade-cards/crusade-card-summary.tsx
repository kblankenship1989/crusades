import React from 'react';
import {Content, Header, Container, Footer, FooterTab, Button, Text} from 'native-base';
import {ConnectedProps} from 'react-redux';
import {crusadeCardSummaryConnector} from './crusade-card-summary-connector';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootParamList, Screens} from '../../navigation/root-param-list';

export type CrusadeCardSummaryProps = ConnectedProps<typeof crusadeCardSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, Screens.CRUSADE_CARD_SUMMARY>
}

export const CrusadeCardSummary : React.FC<CrusadeCardSummaryProps> = ({crusadeCard, navigation}) => {
    return (
        <Container>
            <Header />
            <Content>
            </Content>
            <Footer>
                <FooterTab>
                    <Button
                        full
                        onPress={() : void => {}}
                    >
                        <Text>Edit</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};
