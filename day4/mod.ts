import { WordSearchParser } from "./wordsearchparser.ts";
import { XmasWordCounter } from "./xmaswordcounter.ts";

const input = await Deno.readTextFile("input.txt");
const wordSearchParser = new WordSearchParser(input);
const xmasWordCounter = new XmasWordCounter(wordSearchParser);

console.log(`XMAS appears ${xmasWordCounter.count()} times.`)
// 2215 is too low 