import { MatchReader } from "./MatchReader"
import { CsvFileReader } from "./CsvFileReader"
import { MatchResult } from "./MatchResult"

const matchReader = new MatchReader(new CsvFileReader("football.csv"))
matchReader.load()

let manUnitedWins = 0

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

export { manUnitedWins }
