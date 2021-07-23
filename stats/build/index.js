"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./way1inheritance/index");
var index_2 = require("./way2composition/index");
var refactorAddAnalyzer_1 = require("./refactorAddAnalyzer");
console.log("way1 : ", index_1.manUnitedWins);
console.log("way2 : ", index_2.manUnitedWins);
refactorAddAnalyzer_1.run();
