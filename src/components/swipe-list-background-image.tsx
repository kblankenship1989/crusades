import React from 'react';
import {Text, List, Avatar, Actionsheet} from 'native-base';
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
    const [isActionSheetOpen, setActionSheetOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState<any | null>(null);

    const renderItem = (rowData: ListRenderItemInfo<any>) : JSX.Element =>(
        <List.Item
            onPress={() => onPress(rowData.item)}
            onLongPress={() => {
                setSelectedItem(rowData.item);
                setActionSheetOpen(true);
            }}
        >
            <Avatar source={imageKeyMap[imageKey(rowData.item)]}/>
            {getTitle(rowData.item)}
            {getSubtitle && <Text size={'sm'} italic>{getSubtitle(rowData.item)}</Text>}
        </List.Item>
    );

    return (
        <>
            <Actionsheet isOpen={isActionSheetOpen} onClose={() => setActionSheetOpen(false)}>
                <Actionsheet.Content>
                    {onInfo && <Actionsheet.Item onPress={() => onInfo(selectedItem)}>{'Open Details'}</Actionsheet.Item>}
                    <Actionsheet.Item onPress={() => onDelete(selectedItem)}>{'Delete'}</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
            <List my={2} py={0}>
                {data.map((rowData) => renderItem(rowData))}
            </List>
        </>
    );
};
