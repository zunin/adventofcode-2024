import { PageParser } from "./PageParser.ts";
import { RightPageOrderMiddleNumberSummizer } from "./rightPageOrderMiddleNumberSummizer.ts";

const input = await Deno.readTextFile("input.txt");
const pageParser = new PageParser(input);
const rightPageOrderMiddleNumberSummizer = new RightPageOrderMiddleNumberSummizer(pageParser);

console.log(`If you add up the middle page number from those correctly-ordered updates you get ${rightPageOrderMiddleNumberSummizer.sum()}`);