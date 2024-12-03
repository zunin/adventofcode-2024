import { InstructionSummarizer } from "./instructionsummarizer.ts";
import { MemoryParser } from "./memoryparser.ts";

const input = await Deno.readTextFile("input.txt");
const memoryParser = new MemoryParser(input);
const instructions = memoryParser.getInstructions();
const instructionSummarizer = new InstructionSummarizer(instructions);

const getInstructionsWithConditionals = memoryParser.getInstructionsWithConditionals();
const instructionSummarizerWithConditionals = new InstructionSummarizer(getInstructionsWithConditionals);

console.log(`You get ${instructionSummarizer.sum()} if you add up all of the results of the multiplications`);
console.log(`You get ${instructionSummarizerWithConditionals.sum()} if you add up all of the results of the multiplications of just the enabled multiplications`)
// less than 80128657
// less than 75331474
// less than 84778694