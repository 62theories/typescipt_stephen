"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var ConsoleReport_1 = require("./reportTatgets/ConsoleReport");
var run = function () {
    var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
    matchReader.load();
    var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleReport_1.ConsoleReport());
    summary.buildAndPrintReport(matchReader.matches);
    Summary_1.Summary.winsAnalysiiWithHtmlReport("Man United").buildAndPrintReport(matchReader.matches);
};
exports.run = run;
