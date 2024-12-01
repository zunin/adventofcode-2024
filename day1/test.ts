import { assertEquals } from "@std/assert";
import { ColumnParser } from "./columnparser.ts";
import { ColumnsPairer } from "./columnspairer.ts";
import { PairDistanceSummizer } from "./pairdistancesummizer.ts";

Deno.test("first pair is correct", () => {
  const input = `
    3   4
    4   3
    2   5
    1   3
    3   9
    3   3   
    `;

  const parser = new ColumnParser(input);
  const pairer = new ColumnsPairer(parser.getColumns());
  const [smallestPair] = pairer.pairSmallest();
  assertEquals(smallestPair.left, 1);
  assertEquals(smallestPair.right, 3);
  assertEquals(smallestPair.distance(), 2);
});

Deno.test("second pair is correct", () => {
  const input = `
    3   4
    4   3
    2   5
    1   3
    3   9
    3   3   
    `;

  const parser = new ColumnParser(input);
  const pairer = new ColumnsPairer(parser.getColumns());
  const [_, secondPair] = pairer.pairSmallest();
  assertEquals(secondPair.left, 2);
  assertEquals(secondPair.right, 3);
  assertEquals(secondPair.distance(), 1);
});

Deno.test("third pair is correct", () => {
  const input = `
    3   4
    4   3
    2   5
    1   3
    3   9
    3   3   
    `;

  const parser = new ColumnParser(input);
  const pairer = new ColumnsPairer(parser.getColumns());
  const [first, second, thirdPair] = pairer.pairSmallest();
  assertEquals(thirdPair.left, 3);
  assertEquals(thirdPair.right, 3);
  assertEquals(thirdPair.distance(), 0);
});

Deno.test("fourth pair is correct", () => {
  const input = `
    3   4
    4   3
    2   5
    1   3
    3   9
    3   3   
    `;

  const parser = new ColumnParser(input);
  const pairer = new ColumnsPairer(parser.getColumns());
  const [first, second, third, fourthPair] = pairer.pairSmallest();
  assertEquals(fourthPair.left, 3);
  assertEquals(fourthPair.right, 4);
  assertEquals(fourthPair.distance(), 1);
});

Deno.test("fifth pair is correct", () => {
  const input = `
    3   4
    4   3
    2   5
    1   3
    3   9
    3   3   
    `;

  const parser = new ColumnParser(input);
  const pairer = new ColumnsPairer(parser.getColumns());
  const [first, second, third, fourth, fifthPair] = pairer.pairSmallest();
  assertEquals(fifthPair.left, 3);
  assertEquals(fifthPair.right, 5);
  assertEquals(fifthPair.distance(), 2);
});

Deno.test("sixth pair is correct", () => {
  const input = `
    3   4
    4   3
    2   5
    1   3
    3   9
    3   3   
    `;

  const parser = new ColumnParser(input);
  const pairer = new ColumnsPairer(parser.getColumns());
  const [first, second, third, fourth, fifth, sixthPair] = pairer.pairSmallest();
  assertEquals(sixthPair.left, 4);
  assertEquals(sixthPair.right, 9);
  assertEquals(sixthPair.distance(), 5);
});

Deno.test("total distance is correct", () => {
    const input = `
      3   4
      4   3
      2   5
      1   3
      3   9
      3   3   
      `;
  
    const parser = new ColumnParser(input);
    const pairer = new ColumnsPairer(parser.getColumns());
    const totalSum = new PairDistanceSummizer(pairer.pairSmallest()).totalSum();
    assertEquals(totalSum, 11);
  });
  