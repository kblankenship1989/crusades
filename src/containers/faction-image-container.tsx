import React from 'react';
import {ImageBackground, ImageSourcePropType, StyleSheet, StyleProp, ViewStyle} from 'react-native';

import {FactionImages} from '../assets/images';

import {Factions} from '../types/consts';

const factionImageMap : Record<Factions, ImageSourcePropType> = {
    Unaligned: FactionImages.Unaligned,
    Orks: FactionImages.Orks,
    Imperium: FactionImages.Imperium,
    Aeldari: FactionImages.Aeldari,
    Tyranids: FactionImages.Tyranids,
    Chaos: FactionImages.Chaos,
    Necrons: FactionImages.Necrons,
    ['T\'au Empire']: FactionImages.Tau
};

type FactionImageContainerProps = {
    faction: Factions,
    containerStyle?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
    imageStyle: {
        resizeMode: 'contain',
        opacity: .25,
    }
});

export const FactionImageContainer : React.FC<FactionImageContainerProps> = ({
    children,
    faction,
    containerStyle
}) => (
    <ImageBackground
        source={factionImageMap[faction]}
        style={containerStyle}
        imageStyle={styles.imageStyle}
    >
        {children}
    </ImageBackground>
);
