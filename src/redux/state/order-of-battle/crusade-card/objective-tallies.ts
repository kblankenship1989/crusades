export class ObjectiveTallies {
    public enemyUnitsDestroyed: number;
    public enemyUnitsDestroyedWithPsychic: number;
    public enemyUnitsDestroyedWithRanged: number;
    public enemyUnitsDestroyedWithMelee: number;
    public agenda1?: number;
    public agenda2?: number;
    public agenda3?: number;

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
