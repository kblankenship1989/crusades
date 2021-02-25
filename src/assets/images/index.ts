import * as FactionImages from './factions';
import * as BattleFieldRoleImages from './battlefield-roles';
import {Factions, BattlefieldRoles} from '../../enums';
import {ImageSourcePropType} from 'react-native';

export const imageKeyMap : Record<Factions | BattlefieldRoles, ImageSourcePropType> = {
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
