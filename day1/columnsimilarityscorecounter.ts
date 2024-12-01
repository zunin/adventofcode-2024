import { Columns } from "./columns.ts";

export class ColumnSimilarityScoreCounter {
    constructor(private columns: Columns) {

    }

    getSimilarityScore() {
        return this.columns.lefts
            .reduce((partialSum, left) => partialSum + left * this.columns.rights.filter(right => right === left).length, 0);
    }
}
