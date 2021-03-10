export class ObjectiveTallies {
    enemyUnitsDestroyed: number;
    enemyUnitsDestroyedWithPsychic: number;
    enemyUnitsDestroyedWithRanged: number;
    enemyUnitsDestroyedWithMelee: number;
    agenda1?: number;
    agenda2?: number;
    agenda3?: number;

    constructor(includeAgendas: boolean) {
        this.enemyUnitsDestroyed = 0;
        this.enemyUnitsDestroyedWithPsychic = 0;
        this.enemyUnitsDestroyedWithMelee = 0;
        this.enemyUnitsDestroyedWithRanged = 0;

        if (includeAgendas) {
            this.agenda1 = 0;
            this.agenda2 = 0;
            this.agenda3 = 0;
        }
    }
}
