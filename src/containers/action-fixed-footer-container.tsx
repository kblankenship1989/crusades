import React from 'react';
import {Container, Content, Header, Footer, StyleProvider, ListItem} from 'native-base';
import {StyleSheet} from 'react-native';



type ActionFixedFooterProps = {
    onAdd?: () => void,
    onSave?: () => void,
    isDirty?: boolean
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    }
});

export const ActionFixedFooterContainer : React.FC<ActionFixedFooterProps> = ({children, onAdd, onSave, isDirty}) => {
    return (
        <Container>
            <Header>
            </Header>
            <Content>
                {children}
            </Content>
            <Footer>
            </Footer>
        </Container>
    );
};
