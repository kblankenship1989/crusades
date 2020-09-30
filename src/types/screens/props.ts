import {ConnectedProps} from 'react-redux';
import {orderOfBattleSummaryConnector} from '../../screens/order-of-battle-summary-connector';
import {RootParamList} from '../root-param-list';
import {StackNavigationProp} from '@react-navigation/stack';
import {homeScreenConnector} from '../../screens/home-screen-connector';
import {crusadeCardSummaryConnector} from '../../screens/crusade-card-summary-connector';

export type OrderOfBattleSummaryProps = ConnectedProps<typeof orderOfBattleSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, 'OrderOfBattleSummary'>
}

export type HomeProps = ConnectedProps<typeof homeScreenConnector> & {
    navigation: StackNavigationProp<RootParamList, 'Home'>
}

export type CrusadeCardSummaryProps = ConnectedProps<typeof crusadeCardSummaryConnector> & {
    navigation: StackNavigationProp<RootParamList, 'CrusadeCardSummary'>
}
