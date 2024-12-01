import { Pair } from "./pair.ts";

export class PairDistanceSummizer {
    constructor(private pairs: Pair[]) {

    }

    totalSum(): number {
        return this.pairs.map(x => x.distance())
            .reduce((partialSum, a) => partialSum + a, 0);
    }
}