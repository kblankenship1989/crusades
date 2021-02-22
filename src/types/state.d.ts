import {BattleOutcomes, BattleHonours, BattleScars} from './enums';

declare global {
    declare type Rank = {
        isBlooded: boolean,
        isBattleHardened: boolean,
        isHeroic: boolean,
        isLegendary: boolean,
        battleHonours: Record<string, BattleHonours>,
        battleScars: Record<string, BattleScars>
    }

    declare type Player = {
        firstName: string,
        lastName: string,
        middleName?: string,
        preferredFaction: Factions
    };

    declare type BattleResults = {
        enemyFaction: Factions,
        result: BattleOutcomes,
        markedForGreatness?: string,
        date?: string
    }

    declare type OrderOfBattle = {
        id: string,
        title?: string,
        faction: Factions,
        requisitionPoints: number,
        battleTally: BattleResults[],
        supplyLimit: number,
        crusadeCards: CrusadeCard[],
        // goals?: string,
        // notableVictories?: string[]
    }

    declare type ObjectiveTallies = {
        enemyUnitsDestroyed: number,
        enemyUnitsDestroyedWithPsychic: number,
        enemyUnitsDestroyedWithRanged: number,
        enemyUnitsDestroyedWithMelee: number,
        agenda1?: number,
        agenda2?: number,
        agenda3?: number
    }

    declare type CombatTallies = {
        battlesPlayed: number,
        battlesSurvived: number,
        currentBattleTally: ObjectiveTallies,
        totalTally: ObjectiveTallies
    }


    declare type CrusadeCard = {
        id: string,
        name?: string,
        unit: string,
        faction: Factions,
        battleFieldRole: BattlefieldRoles,
        powerRating: number// ,
        // experiencePoints: number,
        // crusadePoints: number,
        // selectableKeywords: string[],
        // unitType: UnitTypes[],
        // equipment: string[],
        // psychicPowers?: string[],
        // warlordTraits?: string[],
        // relics?: string[],
        // upgrades?: string[],
        // rules: string[],
        // combatTallies: CombatTallies,
        // rank?: Rank
    }

    declare type PlayerAccount = {
        accountId: string,
        player: Player,
        ordersOfBattle: OrderOfBattle[]
    }

    declare type State = {
        accounts: PlayerAccount[],
        selectedAccountId: string | null,
        selectedOrderOfBattle: OrderOfBattle | null,
        selectedCrusadeCard: CrusadeCard | null
    }
}
