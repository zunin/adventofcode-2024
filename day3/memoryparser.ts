import { MulInstruction } from "./models/mulinstruction.ts";

export class MemoryParser {
  getInstructionsWithConditionals(): Array<MulInstruction> {
    return this.parseLineWithConditionals(this.lines.join(""));
  }
  private lines: string[];
  getInstructions(): Array<MulInstruction> {
    return this.lines.map(this.parseLine).flat();
  }

  private parseLineWithConditionals(line: string): Array<MulInstruction> {
    const instructions: Array<MulInstruction> = [];
    const doHits = [...line.matchAll(/(do\(\))/g)];
    const doNotHits = [...line.matchAll(/(don't\(\))/g)];
    const mulHits = [...line.matchAll(/(mul\((?<left>\d+),(?<right>\d+)\))/g)];

    let allowed = true;

    for (let index = 0; index < line.length; index++) {
      const [doHit] = doHits.filter((x) => x.index === index);
      const [doNotHit] = doNotHits.filter((x) => x.index === index);
      const [mulHit] = mulHits.filter((x) => x.index === index);

      if (doHit !== undefined) {
        allowed = true;
      }
      if (doNotHit !== undefined) {
        allowed = false;
      }
      if (mulHit !== undefined) {
        if (allowed) {
          instructions.push(
            new MulInstruction(
              parseInt(mulHit.groups?.left ?? "0"),
              parseInt(mulHit.groups?.right ?? "0"),
            ),
          );
        }
      }
    }

    return instructions;
  }

  private parseLine(line: string): Array<MulInstruction> {
    const hits = [...line.matchAll(/(mul\((?<left>\d+),(?<right>\d+)\))/g)];
    return hits.map((x) =>
      new MulInstruction(parseInt(x.groups?.left!), parseInt(x.groups?.right!))
    );
  }

  constructor(input: string) {
    this.lines = this.splitLines(input).filter((x) => !!x);
  }

  private splitLines(input: string): string[] {
    return input.split(/\r?\n|\r|\n/g);
  }
}
