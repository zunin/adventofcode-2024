import {Level} from "./level.ts";

export default class Report {
    private levelsAreAllIncreasingOrDecreasing(): boolean {
        return (JSON.stringify(this.levels) === JSON.stringify(this.levels.toSorted()))
            || (JSON.stringify(this.levels) === JSON.stringify(this.levels.toSorted().reverse()))
    }

    private adjacentLevelsDifferByAtleastOneAndAtMostThree(): boolean {
        return true;
    }

    safe(): boolean {
        return this.levelsAreAllIncreasingOrDecreasing() 
            && this.adjacentLevelsDifferByAtleastOneAndAtMostThree();
    }
    constructor(private levels: Array<Level>) {}

    get length(): number  {
        return this.levels.length;
    }
}