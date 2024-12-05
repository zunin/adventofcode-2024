import { PageOrderingRule } from "./pageorderingrule.ts";

export class PageNumberUpdate {
  constructor(private updates: Array<number>) {}

  isCorrectOrder(rules: Array<PageOrderingRule>): boolean {
    return this.updates.reduce((previous, current, index, array) => {
      if (previous === false) {
        return false;
      }

      const before = array.slice(0, index);
      const after = array.slice(index + 1, array.length);
      return rules.every((rule) => rule.verify(before, current, after));
    }, true);
  }

  getMiddleNumber(): number {
    return this.updates[Math.floor(this.updates.length / 2)]
  }
}
