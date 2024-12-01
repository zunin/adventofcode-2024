import { Columns } from "./columns.ts";

export class ColumnParser {
    private lefts: number[];
    private rights: number[];
    constructor(input: string) {
        this.lefts = [];
        this.rights = [];
        this.splitLines(input).forEach(line => {
            const [left, right] = this.splitWhitespace(line);
            if (left && right) {
                this.lefts.push(parseInt(left));
                this.rights.push(parseInt(right));
            }
        });
    }

    private splitLines(input: string): string[] {
        return input.split(/\r?\n|\r|\n/g);
    }

    private splitWhitespace(input: string): string[] {
        const trimmed = input.trimStart().trimEnd();
        return trimmed.split("   ")
    }

    getColumns(): Columns {
        return {
            rights: this.rights,
            lefts: this.lefts
        }
    }
}