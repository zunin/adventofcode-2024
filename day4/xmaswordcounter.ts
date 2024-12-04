import { Counter } from "./counters/Counter.ts";
import { DownToUpColumnXmasWordCounter } from "./counters/DownToUpColumnXmasWordCounter.ts";
import { LeftToRightRowXmasWordCounter } from "./counters/LeftToRightRowXmasWordCounter.ts";
import { RightToLeftRowXmasWordCounter } from "./counters/RightToLeftRowXmasWordCounter.ts";
import { TopToDownColumnXmasWordCounter } from "./counters/TopToDownColumnXmasWordCounter.ts";
import { LeftToRightUpToDownDiagonalXmasWordCounter } from "./counters/LeftToRightUpToDownDiagonalXmasWordCounter.ts";
import { RightToLeftTopToDownDiagonalXmasWordCounter } from "./counters/RightToLeftTopToDownDiagonalXmasWordCounter.ts";
import { WordSearchParser } from "./wordsearchparser.ts";
import { LeftToRightDownToUpDiagonalXmasWordCounter } from "./counters/LeftToRightDownToUpDiagonalXmasWordCounter.ts";
import { RightToLeftDownToTopDiagonalXmasWordCounter } from "./counters/RightToLeftDownToTopDiagonalXmasWordCounter.ts";

export class XmasWordCounter implements Counter {
  private counters: Array<Counter>;
  count(): number {
    return this.counters.reduce((sum, current) => sum + current.count(), 0);
  }
  constructor(parser: WordSearchParser) {
    const coordinates = parser.getCoordinates();
    this.counters = [
      new LeftToRightRowXmasWordCounter(coordinates),
      new RightToLeftRowXmasWordCounter(coordinates),
      new TopToDownColumnXmasWordCounter(coordinates),
      new DownToUpColumnXmasWordCounter(coordinates),
      new LeftToRightUpToDownDiagonalXmasWordCounter(coordinates),
      new RightToLeftTopToDownDiagonalXmasWordCounter(coordinates),
      new LeftToRightDownToUpDiagonalXmasWordCounter(coordinates),
      new RightToLeftDownToTopDiagonalXmasWordCounter(coordinates)
    ];
  }
}

