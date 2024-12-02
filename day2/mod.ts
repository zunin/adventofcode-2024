import ReportParser from "./reportparser.ts";

const input = await Deno.readTextFile("input.txt");
const reportParser = new ReportParser(input);

const safeReports = reportParser.getReports().filter(x => x.safe());

console.log(`${safeReports.length} reports are safe`)
