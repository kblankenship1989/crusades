import React from 'react';
import {View, Button} from 'react-native';
import {Icon} from 'react-native-elements';

type SaveEditCancelFooterProps = {
    isDirty: boolean,
    onSave: () => void,
    isEditing: boolean,
    onEdit: () => void,
    onCancel: () => void
}

export const SaveEditCancelFooter = ({
    onSave,
    onEdit,
    onCancel,
    isDirty,
    isEditing
} : SaveEditCancelFooterProps) : JSX.Element => {
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
            {isEditing ?
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
                </Button> :
                <Button
                    onPress={onEdit}
                    title={'Edit'}
                    testID={'footer-edit'}
                >
                    <Icon
                        name={'pencil'}
                        size={20}
                        type={'font-awesome'}
                    />
                </Button>
            }
        </View>
    );
};
