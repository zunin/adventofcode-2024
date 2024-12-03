import { assertEquals } from "@std/assert";
import { MemoryParser } from "./memoryparser.ts";
import { InstructionSummarizer } from "./instructionsummarizer.ts";

const testinput =
  `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
Deno.test("can identify four mul instructions", () => {
  const memoryParser = new MemoryParser(testinput);
  const instructions = memoryParser.getInstructions();

  assertEquals(
    instructions.map((X) => X.multiply()).length,
    4,
  );
});

Deno.test("can sum instructions", () => {
  const memoryParser = new MemoryParser(testinput);
  const instructions = memoryParser.getInstructions();
  const instructionSummarizer = new InstructionSummarizer(instructions);

  assertEquals(
    instructionSummarizer.sum(),
    161,
  );
});
