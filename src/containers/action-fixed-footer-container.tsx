import React from 'react';
import {Icon, Button} from 'react-native-elements';
import {SafeAreaView, View, StyleSheet} from 'react-native';


type ActionFixedFooterProps = {
    onAdd?: () => void,
    onSave?: () => void
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    }
});

export const ActionFixedFooterContainer : React.FC<ActionFixedFooterProps> = ({children, onAdd, onSave}) => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            {children}
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
                    onPress={onSave}
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
