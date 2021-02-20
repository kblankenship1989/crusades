import React from 'react';
import {ImageBackground, ImageSourcePropType, StyleSheet, StyleProp, ViewStyle, RegisteredStyle} from 'react-native';

import {FactionImages, BattleFieldRoleImages} from '../assets/images';
import {BackgroundImageListItem} from '../components/background-image-list-item';
import {BattlefieldRoles, Factions} from '../types/enums';

const factionImageMap : Record<Factions | BattlefieldRoles, ImageSourcePropType> = {
    [Factions.UNALIGNED]: FactionImages.Unaligned,
    [Factions.ORKS]: FactionImages.Orks,
    [Factions.IMPERIUM]: FactionImages.Imperium,
    [Factions.AELDARI]: FactionImages.Aeldari,
    [Factions.TYRANIDS]: FactionImages.Tyranids,
    [Factions.CHAOS]: FactionImages.Chaos,
    [Factions.NECRONS]: FactionImages.Necrons,
    [Factions.TAU]: FactionImages.Tau,
    [BattlefieldRoles.TROOPS]: BattleFieldRoleImages.Troops,
    [BattlefieldRoles.HEAVY_SUPPORT]: BattleFieldRoleImages.HeavySupport,
    [BattlefieldRoles.HQ]: BattleFieldRoleImages.HQ,
    [BattlefieldRoles.LORD_OF_WAR]: BattleFieldRoleImages.LordOfWar,
    [BattlefieldRoles.FORTIFICATION]: BattleFieldRoleImages.Fortification,
    [BattlefieldRoles.FAST_ATTACK]: BattleFieldRoleImages.FastAttack,
    [BattlefieldRoles.FLYER]: BattleFieldRoleImages.Flyer,
    [BattlefieldRoles.ELITES]: BattleFieldRoleImages.Elites,
    [BattlefieldRoles.DEDICATED_TRANSPORT]: BattleFieldRoleImages.DedicatedTransport,
    [BattlefieldRoles.SELECT]: FactionImages.Unaligned
};

type BackgroundImageContainerProps = {
    imageKey: Factions | BattlefieldRoles,
    containerStyle: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
    imageStyle: {
        resizeMode: 'center',
        opacity: .25,
    }
});

export const BackgroundImageContainer : React.FC<BackgroundImageContainerProps> = ({
    children,
    imageKey,
    containerStyle
}) => (
    <ImageBackground
        source={factionImageMap[imageKey]}
        style={containerStyle}
        imageStyle={styles.imageStyle}
    >
        {children}
    </ImageBackground>
);
