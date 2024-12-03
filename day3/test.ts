import { assertEquals } from "@std/assert";
import { MemoryParser } from "./memoryparser.ts";
import { InstructionSummarizer } from "./instructionsummarizer.ts";

Deno.test("can identify four mul instructions", () => {
  const memoryParser = new MemoryParser("xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))");
  const instructions = memoryParser.getInstructions();

  assertEquals(
    instructions.map((X) => X.multiply()).length,
    4,
  );
});

Deno.test("can sum instructions", () => {
  const memoryParser = new MemoryParser("xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))");
  const instructions = memoryParser.getInstructions();
  const instructionSummarizer = new InstructionSummarizer(instructions);

  assertEquals(
    instructionSummarizer.sum(),
    161,
  );
});

Deno.test("can identify two mul instructions with conditionals", () => {
  const memoryParser = new MemoryParser("xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))");
  const instructions = memoryParser.getInstructionsWithConditionals();

  assertEquals(
    instructions.map((X) => X.multiply()).length,
    2,
  );
});

Deno.test("Instructions with conditionals sum to 48", () => {
  const memoryParser = new MemoryParser("xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))");
  const instructions = memoryParser.getInstructionsWithConditionals();
  const instructionSummarizer = new InstructionSummarizer(instructions);

  assertEquals(
    instructionSummarizer.sum(),
    48,
  );
});
