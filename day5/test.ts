import { assertEquals } from "@std/assert";
import { PageParser } from "./PageParser.ts";
import { PageNumberUpdate } from "./pagenumberupdate.ts";
import { RightPageOrderMiddleNumberSummizer } from "./rightPageOrderMiddleNumberSummizer.ts";

export const exampleinput = `
47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47
`;

Deno.test("can count page ordering rules", () => {
  const pageParser = new PageParser(exampleinput);
  assertEquals(pageParser.getPageOrderingRules().length, 21);
});

Deno.test("can count page number updates", () => {
  const pageParser = new PageParser(exampleinput);
  assertEquals(pageParser.getPageNumberUpdates().length, 6);
});

Deno.test("first update is in the right order", () => {
  const pageParser = new PageParser(exampleinput);
  assertEquals(new PageNumberUpdate([75,47,61,53,29]).isCorrectOrder(pageParser.getPageOrderingRules()), true);
});

Deno.test("second update is in the right order", () => {
  const pageParser = new PageParser(exampleinput);
  assertEquals(new PageNumberUpdate([97,61,53,29,13]).isCorrectOrder(pageParser.getPageOrderingRules()), true);
});

Deno.test("third update is in the right order", () => {
  const pageParser = new PageParser(exampleinput);
  assertEquals(new PageNumberUpdate([75,29,13]).isCorrectOrder(pageParser.getPageOrderingRules()), true);
});

Deno.test("fourth update is in the wrong order", () => {
  const pageParser = new PageParser(exampleinput);
  assertEquals(new PageNumberUpdate([75,97,47,61,53]).isCorrectOrder(pageParser.getPageOrderingRules()), false);
});

Deno.test("fifth update is in the wrong order", () => {
  const pageParser = new PageParser(exampleinput);
  assertEquals(new PageNumberUpdate([61,13,29]).isCorrectOrder(pageParser.getPageOrderingRules()), false);
});

Deno.test("sixth update is in the wrong order", () => {
  const pageParser = new PageParser(exampleinput);
  assertEquals(new PageNumberUpdate([97,13,75,29,47]).isCorrectOrder(pageParser.getPageOrderingRules()), false);
});

Deno.test("sixth update is in the wrong order", () => {
  const pageParser = new PageParser(exampleinput);
  assertEquals(new PageNumberUpdate([97,13,75,29,47]).isCorrectOrder(pageParser.getPageOrderingRules()), false);
});

Deno.test("sixth update is in the wrong order", () => {
  const pageParser = new PageParser(exampleinput);
  const rightPageOrderMiddleNumberSummizer = new RightPageOrderMiddleNumberSummizer(pageParser);
  assertEquals(rightPageOrderMiddleNumberSummizer.sum(), 143);
});