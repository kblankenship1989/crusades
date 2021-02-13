import React from 'react';
import { Icon, Button } from 'react-native-elements';
import { ActionFooterProps } from '../types/components/props';
import { View } from 'react-native';

export const ActionFooter: React.FC<ActionFooterProps> = ({ onAdd, onSave }) => {
    return (
        <View>
            {onAdd && <Button
                onPress={onAdd}
                icon={<Icon
                    name={'plus'}
                    type={'font-awesome'}
                    size={18}
                />}
                title={'ADD'}
            />}
            {onSave && <Button
                onPress={onAdd}
                icon={<Icon
                    name={'save'}
                    type={'font-awesome'}
                    size={18}
                />}
                title={'SAVE'}
            />}
        </View>
    );
};
