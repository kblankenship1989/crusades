import React from 'react';
import {Icon, IconButton} from 'native-base';
import {AppBar} from 'native-base/src/components/composites/AppBar';

export type Action = {
    icon: string,
    onPress: () => void,
    isDisabled: boolean
}

type AppHeaderProps = {
    title: string,
    action?: Action
}

export const AppHeader : React.FC<AppHeaderProps> = ({
    title,
    action
}) => {

    return (
        <AppBar>
            <AppBar.Left/>
            <AppBar.Content>{title}</AppBar.Content>
            {action &&
                <AppBar.Right>
                    <IconButton
                        onPress={action.onPress}
                        disabled={action.isDisabled}
                        icon={
                            <Icon
                                type={'MaterialCommunityIcons'}
                                name={action.icon}
                            />
                        }
                    />
                </AppBar.Right>
            }
        </AppBar>
    );
};
