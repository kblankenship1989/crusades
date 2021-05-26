import {Container, Image} from 'native-base';
import React from 'react';

export const LoadingGIF : React.FC = () => (
    <Container>
        <Image
            alt={'Loading...'}
            source={require('../assets/images/loading.gif')}
        />
    </Container>
);
