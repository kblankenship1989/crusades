import React from 'react';
import {Header, Button, Body, Right, Left, Icon} from 'native-base';

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
        <Header>
            <Left/>
            <Body>
                {title}
            </Body>
            {action &&
                <Right>
                    <Button
                        onPress={action.onPress}
                        transparent
                        disabled={action.isDisabled}
                    >
                        <Icon
                            type={'MaterialCommunityIcons'}
                            name={action.icon}
                        />
                    </Button>
                </Right>
            }
        </Header>
    );
};
