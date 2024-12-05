import { CrossMasCounter } from "./counters/CrossMasCounter.ts";
import { WordSearchParser } from "./wordsearchparser.ts";
import { XmasWordCounter } from "./xmaswordcounter.ts";

const input = await Deno.readTextFile("input.txt");
const wordSearchParser = new WordSearchParser(input);
const xmasWordCounter = new XmasWordCounter(wordSearchParser);
const crossMasCounter = new CrossMasCounter(wordSearchParser.getCoordinates());

console.log(`XMAS appears ${xmasWordCounter.count()} times.`)
// 2215 is too low 

console.log(`X-MAS appears ${crossMasCounter.count()} times.`)
