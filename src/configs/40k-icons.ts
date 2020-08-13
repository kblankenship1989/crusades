import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from './40k-icons.json';
import {factions} from '../types/consts';
import {Unaligned, Imperium, Chaos, Aeldari, Tyranids, Orks, Necrons, TAu} from '../components/Icons40k';
export const Icons40k = createIconSetFromFontello(fontelloConfig, '40k-icons', '40k-icons.ttf');

export const factionsIconMap = {
    [factions[0]]: Unaligned,
    [factions[1]]: Imperium,
    [factions[2]]: Chaos,
    [factions[3]]: Aeldari,
    [factions[4]]: Tyranids,
    [factions[5]]: Orks,
    [factions[6]]: Necrons,
    [factions[7]]: TAu
};
