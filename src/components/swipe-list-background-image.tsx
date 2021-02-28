import React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {PlayerAccount} from '../redux/state/player-account';
import {OrderOfBattle} from '../redux/state/order-of-battle';
import {CrusadeCard} from '../redux/state/order-of-battle/crusade-card';
import {Text, Right, Body, ListItem, View, Left, Button, Icon} from 'native-base';
import {ListRenderItemInfo} from 'react-native';
import {imageKeyMap} from '../assets/images';

export type SwipeListTypes = PlayerAccount | OrderOfBattle | CrusadeCard

export type SwipeListWrapperProps<T> = {
    data: ReadonlyArray<T>,
    onPress: (item: T) => void,
    onDelete: (item: T) => void,
    onInfo?: (item: T) => void,
    getTitle: (item: T) => string,
    getSubtitle?: (item: T) => string,
    imageKey?: (item: T) => (keyof typeof imageKeyMap | undefined)
}

export const SwipeListWrapper = ({data, onPress, getTitle, getSubtitle, onInfo, onDelete} : SwipeListWrapperProps<any>) : JSX.Element=> {
    const renderItem = (rowData: ListRenderItemInfo<any>) : JSX.Element =>(
        <ListItem
            button
            onPress={() => onPress(rowData.item)}
        >
            <Body>
                <Text>{getTitle(rowData.item)}</Text>
            </Body>
            {getSubtitle && <Right>
                <Text note>{getSubtitle(rowData.item)}</Text>
            </Right>}
        </ListItem>
    );

    const renderHiddenRow = (rowData: ListRenderItemInfo<any>) => (
        <View>
            {onInfo && <Left>
                <Button full onPress={() => onInfo(rowData.item)}>
                    <Icon active name="information-circle" />
                </Button>
            </Left>}
            <Right>
                <Button full danger onPress={() => onDelete(rowData.item)}>
                    <Icon active name="trash" />
                </Button>
            </Right>
        </View>
    );

    return (<SwipeListView
        leftOpenValue={75}
        rightOpenValue={-75}
        data={data}
        keyExtractor={(item : SwipeListTypes) => item.id}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenRow}
    />);
};
