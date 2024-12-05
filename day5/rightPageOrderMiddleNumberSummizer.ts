import { PageParser } from "./PageParser.ts";

export class RightPageOrderMiddleNumberSummizer {
    constructor(private pageParser: PageParser) {}

    sum() {
        const updates = this.pageParser.getPageNumberUpdates();
        const rules = this.pageParser.getPageOrderingRules();

        return updates
            .filter(update => update.isCorrectOrder(rules))
            .reduce((sum, current) => sum + current.getMiddleNumber(), 0)
    }
}