import { PageOrderingRule } from "./pageorderingrule.ts";

export class PageNumberUpdate {
    constructor(private updates: Array<number>) {} 

    isCorrectOrder(rules: Array<PageOrderingRule>): boolean {
        return true;
    }
}