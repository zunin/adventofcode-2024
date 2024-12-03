import { MulInstruction } from "./models/mulinstruction.ts";

export class MemoryParser {
    private lines: string[]
    getInstructions(): Array<MulInstruction> {
        return this.lines.map(line => {
            const hits = [...line.matchAll(/(mul\((?<left>\d+),(?<right>\d+)\))/g)];
            return hits.map(x => new MulInstruction(parseInt(x.groups?.left!), parseInt(x.groups?.right!)))
            
        }).flat()
    }
    constructor(input: string) {
        this.lines = this.splitLines(input).filter(x => !!x);
    }

    private splitLines(input: string): string[] {
        return input.split(/\r?\n|\r|\n/g);
    }


}