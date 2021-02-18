import React from 'react';
import {ImageBackground, ImageSourcePropType} from 'react-native';

import orks from '../assets/images/orks.png';
import {FactionImageContainerProps} from '../types/components/props';
import {Factions} from '../types/consts';

const factionImageMap : Record<Factions, ImageSourcePropType> = {
    Unaligned: orks,
    Orks: orks,
    Imperium: orks,
    Aeldari: orks,
    Tyranids: orks,
    Chaos: orks,
    Necrons: orks,
    ['T\'au Empire']: orks
};

export const FactionImageContainer : React.FC<FactionImageContainerProps> = ({
    children,
    faction
}) => (
    <ImageBackground
        source={factionImageMap[faction]}
        style={{
            height: 50,
        }}
        imageStyle={{
            resizeMode: 'contain',
            opacity: .25,
        }}
    >
        {children}
    </ImageBackground>
);
