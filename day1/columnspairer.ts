import { Columns } from "./columns.ts";
import { Pair } from "./pair.ts";
import { zip } from "@std/collections/zip";

export class ColumnsPairer {
    constructor(private columns: Columns) {

    }

    pairSmallest(): Array<Pair> {
        const sortedLeft = this.columns.lefts.sort();
        const sortedRight = this.columns.rights.sort();

        return zip(sortedLeft, sortedRight).map(([left, right]) => {
            return new Pair(left, right)
        });
    }
}
