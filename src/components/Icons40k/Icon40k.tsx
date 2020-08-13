import React from 'react';
import customFontGlyph from '../../assets/fonts/icons-40k.json';
import {createIconSet} from 'react-native-vector-icons';

type IconList = 'aeldari' |
    'orks' |
    't_au' |
    'imperium' |
    'chaos' |
    'necrons' |
    'tyranids' |
    'hq' |
    'dedicated_transport' |
    'heavy_support' |
    'elites' |
    'troops' |
    'fast_attack' |
    'flyer' |
    'fortification' |
    'lord_of_war' |
    'unaligned';
export type Icon40kProps = {
    color: string,
    size: number
}

type IconProps = Icon40kProps & {
    name: IconList
}

const Icon = createIconSet(customFontGlyph, 'icons-40k', 'icons-40k.ttf');

export const Icon40k = (props: IconProps) : JSX.Element => (
    <Icon {...props}/>
);
