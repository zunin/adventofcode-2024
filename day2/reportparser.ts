import {Level} from "./models/level.ts";
import Report from "./models/report.ts";

export default class ReportParser {
    constructor(private input: string) {
        
    }

    private splitLines(input: string): string[] {
        return input.split(/\r?\n|\r|\n/g);
    }

    private splitWhitespace(input: string): string[] {
        const trimmed = input.trimStart().trimEnd();
        return trimmed.split(" ")
    }
    
    getReports(): Array<Report> {
        return this.splitLines(this.input)
            .filter(line => !!line)
            .map(line => new Report(this.splitWhitespace(line)
                .map(number => parseInt(number))
            ))
    }
}
