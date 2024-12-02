import {Level} from "./level.ts";

export default class Report {
    private levelsAreSorted(): boolean {
        return this.levels.reduce((previous, current, index, array) => {
            const left = array[index - 1];
            if (left >= current) {
                return false;
            }

            return previous;
        }, true);
    }

    private levelsAreReverseSorted(): boolean {
        return this.levels.reduce((previous, current, index, array) => {
            const left = array[index - 1];
            if (left <= current) {
                return false;
            }

            return previous;
        }, true);
    }

    private levelsAreAllIncreasingOrDecreasing(): boolean {
        return this.levelsAreSorted() || this.levelsAreReverseSorted() 
    }

    private adjacentLevelsDifferByAtleastOneAndAtMostThree(): boolean {
        return this.levels.reduce((previous, current, index, array) => {
            const left = array[index - 1];
            const right = array[index + 1];

            if (left !== undefined) {
                const leftDistance = Math.abs(left - current);
                if (leftDistance < 1 || leftDistance > 3) {
                    return false;
                }
            }

            if (right !== undefined) {
                const rightDistance = Math.abs(right - current);
                if (rightDistance < 1 || rightDistance > 3) {
                    return false;
                }
            }
            return previous
        }, true);
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