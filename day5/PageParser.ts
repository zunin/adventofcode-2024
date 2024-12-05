import { PageNumberUpdate } from "./pagenumberupdate.ts";
import { PageOrderingRule } from "./pageorderingrule.ts";

export class PageParser {
  private lines: Array<string>;
  getPageOrderingRules(): Array<PageOrderingRule> {
    return this.lines.filter((x) => x.includes("|")).map((line) => {
      const [leftText, rightText] = line.split("|");
      return new PageOrderingRule(parseInt(leftText), parseInt(rightText));
    });
  }

  getPageNumberUpdates(): Array<PageNumberUpdate> {
    return this.lines.filter((x) => !x.includes("|")).map((line) => {
      return new PageNumberUpdate(line.split(",").map(number => parseInt(number)));
    });
  }
  constructor(input: string) {
    this.lines = this.splitLines(input).filter(x => !!x);
  }

  private splitLines(input: string): string[] {
    return input.split(/\r?\n|\r|\n/g);
  }
}
