import React from 'react';
import {ListRenderItem, View, TouchableOpacity} from 'react-native';
import {getColorScheme} from '../helpers/getColorScheme';
import {appStyles} from '../../styles';
import {Icon} from 'react-native-elements';

type SwipeOutDeleteRightProps = {
    onDelete: (index: number) => void
}
export const SwipeOutDeleteRight = ({onDelete} : SwipeOutDeleteRightProps) : ListRenderItem<any> => ({index}) : JSX.Element => {
    const styles = appStyles(getColorScheme());
    return (
        <View style={styles.swipeOutRowBack}>
            <TouchableOpacity
                onPress={() => onDelete(index)}
                style={styles.swipeoutBackRightBtn}
            >
                <Icon
                    color={'white'}
                    size={20}
                    name={'trash'}
                    type={'font-awesome'}
                />
            </TouchableOpacity>
        </View>
    );
};
