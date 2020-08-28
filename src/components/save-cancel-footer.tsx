import React from 'react';
import {View, Button} from 'react-native';
import {Icon} from 'react-native-elements';

type SaveCancelFooterProps = {
    isDirty: boolean,
    onSave: () => void,
    onCancel: () => void
}

export const SaveCancelFooter = ({
    onSave,
    onCancel,
    isDirty
} : SaveCancelFooterProps) : JSX.Element => {
    return(
        <View style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center'
        }}>
            <Button
                onPress={onCancel}
                title={'Cancel'}
                testID={'footer-cancel'}
            >
                <Icon
                    name={'window-close'}
                    size={20}
                    type={'font-awesome'}
                />
            </Button>
            <Button
                onPress={onSave}
                title={'Save'}
                disabled={!isDirty}
                testID={'footer-save'}
            >
                <Icon
                    name={'save'}
                    size={20}
                    type={'font-awesome'}
                />
            </Button>
        </View>
    );
};
