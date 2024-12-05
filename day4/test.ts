import { assertEquals } from "@std/assert";
import { WordSearchParser } from "./wordsearchparser.ts";
import { XmasWordCounter } from "./xmaswordcounter.ts";
import { LeftToRightRowXmasWordCounter } from "./counters/LeftToRightRowXmasWordCounter.ts";
import { RightToLeftRowXmasWordCounter } from "./counters/RightToLeftRowXmasWordCounter.ts";
import { TopToDownColumnXmasWordCounter } from "./counters/TopToDownColumnXmasWordCounter.ts";
import { DownToUpColumnXmasWordCounter } from "./counters/DownToUpColumnXmasWordCounter.ts";
import { RightToLeftTopToDownDiagonalXmasWordCounter } from "./counters/RightToLeftTopToDownDiagonalXmasWordCounter.ts";
import { LeftToRightDownToUpDiagonalXmasWordCounter } from "./counters/LeftToRightDownToUpDiagonalXmasWordCounter.ts";
import { LeftToRightUpToDownDiagonalXmasWordCounter } from "./counters/LeftToRightUpToDownDiagonalXmasWordCounter.ts";
import { RightToLeftDownToTopDiagonalXmasWordCounter } from "./counters/RightToLeftDownToTopDiagonalXmasWordCounter.ts";
import { CrossMasCounter } from "./counters/CrossMasCounter.ts";

const exampleinput = `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
`;

Deno.test("can identify top left corner", () => {
  const wordSearchParser = new WordSearchParser(exampleinput);
  assertEquals(wordSearchParser.getCoordinates().get(0, 0), "M");
});

Deno.test("can identify bottom left corner", () => {
  const wordSearchParser = new WordSearchParser(exampleinput);
  assertEquals(wordSearchParser.getCoordinates().get(9, 0), "M");
});

Deno.test("can identify top right corner", () => {
  const wordSearchParser = new WordSearchParser(exampleinput);
  assertEquals(wordSearchParser.getCoordinates().get(0, 9), "M");
});

Deno.test("can identify bottom right corner", () => {
  const wordSearchParser = new WordSearchParser(exampleinput);
  assertEquals(wordSearchParser.getCoordinates().get(9, 9), "X");
});

Deno.test("can identify 18 xmas occurances", () => {
  const wordSearchParser = new WordSearchParser(exampleinput);
  const xmasWordCounter = new XmasWordCounter(wordSearchParser);
  assertEquals(xmasWordCounter.count(), 18);
});

Deno.test("left to right counts", () => {
  const wordSearchParser = new WordSearchParser(`
        ..XMAS
        ......
        ......
        ......
        ......
        ......
        `);
  const xmasWordCounter = new LeftToRightRowXmasWordCounter(
    wordSearchParser.getCoordinates(),
  );
  assertEquals(xmasWordCounter.count(), 1);
});

Deno.test("right to left counts", () => {
  const wordSearchParser = new WordSearchParser(`
        ..SAMX
        ......
        ......
        ......
        ......
        ......
        `);
  const xmasWordCounter = new RightToLeftRowXmasWordCounter(
    wordSearchParser.getCoordinates(),
  );
  assertEquals(xmasWordCounter.count(), 1);
});

Deno.test("top to down counts", () => {
  const wordSearchParser = new WordSearchParser(`
        ......
        X.....
        M.....
        A.....
        S.....
        ......
        `);
  const xmasWordCounter = new TopToDownColumnXmasWordCounter(
    wordSearchParser.getCoordinates(),
  );
  assertEquals(xmasWordCounter.count(), 1);
});

Deno.test("down to top counts", () => {
    const wordSearchParser = new WordSearchParser(`
          ......
          S.....
          A.....
          M.....
          X.....
          ......
          `);
    const xmasWordCounter = new DownToUpColumnXmasWordCounter(
      wordSearchParser.getCoordinates(),
    );
    assertEquals(xmasWordCounter.count(), 1);
  });
  
  Deno.test("left to right diagonal counts", () => {
    const wordSearchParser = new WordSearchParser(`
          ......
          .X....
          ..M...
          ...A..
          ....S.
          ......
          `);
    const xmasWordCounter = new LeftToRightUpToDownDiagonalXmasWordCounter(
      wordSearchParser.getCoordinates(),
    );
    assertEquals(xmasWordCounter.count(), 1);
  });

  Deno.test("right to left diagonal counts", () => {
    const wordSearchParser = new WordSearchParser(`
          ......
          ....X.
          ...M..
          ..A...
          .S....
          ......
          `);
    const xmasWordCounter = new RightToLeftTopToDownDiagonalXmasWordCounter(
      wordSearchParser.getCoordinates(),
    );
    assertEquals(xmasWordCounter.count(), 1);
  });

  Deno.test("left to right down to up diagonal counts", () => {
    const wordSearchParser = new WordSearchParser(`
          ......
          ....S.
          ...A..
          ..M...
          .X....
          ......
          `);
    const xmasWordCounter = new LeftToRightDownToUpDiagonalXmasWordCounter(
      wordSearchParser.getCoordinates(),
    );
    assertEquals(xmasWordCounter.count(), 1);
  });

Deno.test("right to left down to up diagonal counts", () => {
    const wordSearchParser = new WordSearchParser(`
          ......
          .S....
          ..A...
          ...M..
          ....X.
          ......
          `);
    const xmasWordCounter = new RightToLeftDownToTopDiagonalXmasWordCounter(
      wordSearchParser.getCoordinates(),
    );
    assertEquals(xmasWordCounter.count(), 1);
  });

  Deno.test("can discover a cross-mas", () => {
    const wordSearchParser = new WordSearchParser(`
          ......
          .M.M..
          ..A...
          .S.S..
          ......
          ......
          `);
    const corssmasCounter = new CrossMasCounter(
      wordSearchParser.getCoordinates(),
    );
    assertEquals(corssmasCounter.count(), 1);
  });