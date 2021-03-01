import React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Text, Right, Body, ListItem, View, Left, Button, Icon, Thumbnail} from 'native-base';
import {ListRenderItemInfo} from 'react-native';
import {imageKeyMap} from '../assets/images';

export type SwipeListWrapperProps<T> = {
    data: ReadonlyArray<T>,
    onPress: (item: T) => void,
    onDelete: (item: T) => void,
    onInfo?: (item: T) => void,
    getTitle: (item: T) => string,
    getSubtitle?: (item: T) => string,
    imageKey: (item: T) => (keyof typeof imageKeyMap)
}

export const SwipeListWrapper = ({data, onPress, getTitle, getSubtitle, onInfo, onDelete, imageKey} : SwipeListWrapperProps<any>) : JSX.Element=> {
    const renderItem = (rowData: ListRenderItemInfo<any>) : JSX.Element =>(
        <ListItem
            button
            avatar
            onPress={() => onPress(rowData.item)}
        >
            <Left>
                <Thumbnail source={imageKeyMap[imageKey(rowData.item)]}/>
            </Left>
            <Body>
                <Text>{getTitle(rowData.item)}</Text>
            </Body>
            {getSubtitle && <Right>
                <Text note>{getSubtitle(rowData.item)}</Text>
            </Right>}
        </ListItem>
    );

    const renderHiddenRow = (rowData: ListRenderItemInfo<any>) => (
        <ListItem>
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
        </ListItem>
    );

    return (<SwipeListView
        leftOpenValue={75}
        rightOpenValue={-75}
        data={data}
        keyExtractor={(item : any) => item.id}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenRow}
    />);
};
