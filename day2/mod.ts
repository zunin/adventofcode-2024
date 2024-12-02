import ReportParser from "./reportparser.ts";

const input = await Deno.readTextFile("input.txt");
const reportParser = new ReportParser(input);
const reports = reportParser.getReports();
const safeReports = reports.filter(x => x.safe());

console.log(`${safeReports.length} reports are safe`)

const problemDampeneredSafe = reports.filter(x => x.problemDampeneredSafe());

console.log(`${problemDampeneredSafe.length} reports are safe using the Problem Dampener`)