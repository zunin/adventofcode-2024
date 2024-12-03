import { InstructionSummarizer } from "./instructionsummarizer.ts";
import { MemoryParser } from "./memoryparser.ts";

const input = await Deno.readTextFile("input.txt");
const memoryParser = new MemoryParser(input);
const instructions = memoryParser.getInstructions();
const instructionSummarizer = new InstructionSummarizer(instructions);


console.log(`You get ${instructionSummarizer.sum()} if you add up all of the results of the multiplications`)