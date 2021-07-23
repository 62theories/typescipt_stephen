import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTatgets/ConsoleReport";
import { HtmlReport } from "./reportTatgets/HtmlReport";

const run = () => {
  const matchReader = MatchReader.fromCsv("football.csv");
  matchReader.load();

  const summary = new Summary(
    new WinsAnalysis("Man United"),
    new ConsoleReport()
  );
  summary.buildAndPrintReport(matchReader.matches);

  Summary.winsAnalysiiWithHtmlReport("Man United").buildAndPrintReport(
    matchReader.matches
  );
};

export { run };
