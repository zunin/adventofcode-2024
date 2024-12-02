import { assertEquals } from "@std/assert";
import ReportParser from "./reportparser.ts";

const exampleinput = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`;

Deno.test("can parse correct shape", () => {
  const reportParser = new ReportParser(exampleinput);
  const reports = reportParser.getReports();
  assertEquals(reports.length, 6);
  reports.forEach((report) => {
    assertEquals(report.length, 5);
  });
});

Deno.test("first report is safe", () => {
  const reportParser = new ReportParser("7 6 4 2 1");
  const [report] = reportParser.getReports();
  assertEquals(report.safe(), true, "the levels are all decreasing by 1 or 2.");
});

Deno.test("second report is not safe", () => {
  const reportParser = new ReportParser("1 2 7 8 9");
  const [report] = reportParser.getReports();
  assertEquals(report.safe(), false, "2 7 is an increase of 5.");
});

Deno.test("third report is not safe", () => {
  const reportParser = new ReportParser("9 7 6 2 1");
  const [report] = reportParser.getReports();
  assertEquals(report.safe(), false, "6 2 is a decrease of 4.");
});

Deno.test("fourth report is not safe", () => {
  const reportParser = new ReportParser("1 3 2 4 5");
  const [report] = reportParser.getReports();
  assertEquals(
    report.safe(),
    false,
    "1 3 is increasing but 3 2 is decreasing.",
  );
});

Deno.test("fifth report is not safe", () => {
  const reportParser = new ReportParser("8 6 4 4 1");
  const [report] = reportParser.getReports();
  assertEquals(
    report.safe(),
    false,
    "4 4 is neither an increase or a decrease.",
  );
});

Deno.test("sixth report is safe", () => {
  const reportParser = new ReportParser("1 3 6 7 9");
  const [report] = reportParser.getReports();
  assertEquals(
    report.safe(),
    true,
    "the levels are all increasing by 1, 2, or 3.",
  );
});

Deno.test("two report are safe", () => {
  const reportParser = new ReportParser(exampleinput);
  const reports = reportParser.getReports();
  assertEquals(reports.filter((x) => x.safe()).length, 2);
});
