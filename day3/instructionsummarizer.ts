import { MulInstruction } from "./models/mulinstruction.ts";

export class InstructionSummarizer {
    constructor(private instructions: Array<MulInstruction>) {}
    sum() {
        return this.instructions.reduce((sum, current) => sum + current.multiply(), 0);
    }
}