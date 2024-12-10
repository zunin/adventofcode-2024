import { assertEquals } from "@std/assert";
import { MapParser } from "./MapParser.ts";

const exampleInput = `
....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...
`;

Deno.test("map can reproduce input", () => {
  const mapParser = new MapParser(exampleInput);
  const map = mapParser.getMap();
  assertEquals(map.print().trim(), exampleInput.trim());
});

const stepSixInput = `
....#.....
....^....#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...
`;

Deno.test("guard can move", () => {
  const mapParser = new MapParser(exampleInput);
  const map = mapParser.getMap();
  map.step();
  map.step();
  map.step();
  map.step();
  map.step();
  assertEquals(map.print().trim(), stepSixInput.trim());
});

const stepSevenInput = `
....#.....
....>....#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...
`;

Deno.test("guard can turn", () => {
    const mapParser = new MapParser(stepSixInput);
    const map = mapParser.getMap();
    map.step();
    assertEquals(map.print().trim(), stepSevenInput.trim());
  });
  
