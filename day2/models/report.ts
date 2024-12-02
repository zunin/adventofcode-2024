import {Level} from "./level.ts";

export default class Report {
    private levelsAreSorted(levels: Array<Level>): boolean {
        return levels.reduce((previous, current, index, array) => {
            const left = array[index - 1];
            if (left >= current) {
                return false;
            }

            return previous;
        }, true);
    }

    private levelsAreReverseSorted(levels: Array<Level>): boolean {
        return levels.reduce((previous, current, index, array) => {
            const left = array[index - 1];
            if (left <= current) {
                return false;
            }

            return previous;
        }, true);
    }

    private levelsAreAllIncreasingOrDecreasing(levels: Array<Level>): boolean {
        return this.levelsAreSorted(levels) || this.levelsAreReverseSorted(levels) 
    }

    private adjacentLevelsDifferByAtleastOneAndAtMostThree(levels: Array<Level>): boolean {
        return levels.reduce((previous, current, index, array) => {
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
        return this.levelsAreAllIncreasingOrDecreasing(this.levels) 
            && this.adjacentLevelsDifferByAtleastOneAndAtMostThree(this.levels);
    }

    problemDampeneredSafe(): boolean {
        if (this.safe()) {
            return true;
        }
        for(let ignoredIndex = 0; ignoredIndex < this.length; ignoredIndex++) {
            const levels = this.levels.slice(0, ignoredIndex).concat(this.levels.slice(ignoredIndex + 1, this.length));
            if(this.levelsAreAllIncreasingOrDecreasing(levels) && this.adjacentLevelsDifferByAtleastOneAndAtMostThree(levels)) {
                return true;
            }
        }
        return false;
    }

    constructor(private levels: Array<Level>) {}

    get length(): number  {
        return this.levels.length;
    }
}