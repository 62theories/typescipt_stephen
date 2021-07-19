"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manUnitedWins = void 0;
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var matchReader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader("football.csv"));
matchReader.load();
var manUnitedWins = 0;
exports.manUnitedWins = manUnitedWins;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        (exports.manUnitedWins = ++manUnitedWins) - 1;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        (exports.manUnitedWins = ++manUnitedWins) - 1;
    }
}
