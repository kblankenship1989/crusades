import React from 'react';
import {Icon, Button} from 'react-native-elements';
import {ActionFooterProps} from '../types/components/props';
import {SafeAreaView, ScrollView, View} from 'react-native';

export const ActionFixedFooterContainer : React.FC<ActionFooterProps> = ({children, onAdd, onSave}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                {children}
            </ScrollView>
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
        </SafeAreaView>
    );
};
