import React from 'react';
import {Text, List, Avatar, Actionsheet} from 'native-base';
import {imageKeyMap} from '../assets/images';
import {OrderOfBattle} from '../redux/state/order-of-battle';
import {CrusadeCard} from '../redux/state/order-of-battle/crusade-card';
import {BattleResults} from '../redux/state/order-of-battle/battle-results';

export type AvailableSwipeListDataTypes = OrderOfBattle | CrusadeCard | BattleResults;

export type SwipeListWrapperProps<T> = {
    data: ReadonlyArray<T>,
    onPress: (item: T) => void,
    onDelete: (item: T) => void,
    onInfo?: (item: T) => void,
    getTitle: (item: T) => string,
    getSubtitle?: (item: T) => string,
    imageKey: (item: T) => (keyof typeof imageKeyMap)
}

export const SwipeListWrapper = ({data, onPress, getTitle, getSubtitle, onInfo, onDelete, imageKey} : SwipeListWrapperProps<AvailableSwipeListDataTypes>) : JSX.Element=> {
    const [isActionSheetOpen, setActionSheetOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState<AvailableSwipeListDataTypes | null>(null);

    const renderItem = (item: AvailableSwipeListDataTypes) : JSX.Element =>(
        <List.Item
            onPress={() => onPress(item)}
            onLongPress={() => {
                setSelectedItem(item);
                setActionSheetOpen(true);
            }}
        >
            <Avatar source={imageKeyMap[imageKey(item)]}/>
            {getTitle(item)}
            {getSubtitle && <Text size={'sm'} italic>{getSubtitle(item)}</Text>}
        </List.Item>
    );

    console.log(data);

    return (
        <>
            <Actionsheet isOpen={isActionSheetOpen} onClose={() => setActionSheetOpen(false)}>
                <Actionsheet.Content>
                    {onInfo && <Actionsheet.Item onPress={() => onInfo(selectedItem as AvailableSwipeListDataTypes)}>{'Open Details'}</Actionsheet.Item>}
                    <Actionsheet.Item onPress={() => onDelete(selectedItem as AvailableSwipeListDataTypes)}>{'Delete'}</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
            <List my={2} py={0}>
                {data.map((rowData) => renderItem(rowData))}
            </List>
        </>
    );
};
