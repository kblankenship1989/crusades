import React from 'react';
import {ImageBackground, ImageSourcePropType} from 'react-native';

import aeldari from '../assets/images/aeldari.png';
import chaos from '../assets/images/chaos.png';
import imperium from '../assets/images/imperium.png';
import necrons from '../assets/images/necrons.png';
import orks from '../assets/images/orks.png';
import tau from '../assets/images/t_au.png';
import tyranids from '../assets/images/tyranids.png';
import unaligned from '../assets/images/unaligned.png';

import {FactionImageContainerProps} from '../types/components/props';
import {Factions} from '../types/consts';

const factionImageMap : Record<Factions, ImageSourcePropType> = {
    Unaligned: unaligned,
    Orks: orks,
    Imperium: imperium,
    Aeldari: aeldari,
    Tyranids: tyranids,
    Chaos: chaos,
    Necrons: necrons,
    ['T\'au Empire']: tau
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
