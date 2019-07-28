/* jshint esversion:6 */
Player.prototype.filterRules = {};
Player.prototype.filterRules.balls = (a) => { return a.pitchResultCode === "B"; };
Player.prototype.filterRules.swingingStrikes = (a) => { return a.pitchResultCode === "S"; };
Player.prototype.filterRules.inPlayNoOuts = (a) => { return a.pitchResultCode === "D"; };
Player.prototype.filterRules.inPlayOuts = (a) => { return a.pitchResultCode === "X"; };
Player.prototype.filterRules.fouls = (a) => { return a.pitchResultCode === "F"; };
Player.prototype.filterRules.foulTips = (a) => { return a.pitchResultCode === "T"; };
Player.prototype.filterRules.calledStrikes = (a) => { return a.pitchResultCode === "C"; };
Player.prototype.filterRules.homeRuns = (a) => { return a.playResult === "Home Run" && a.pitchResultCode == "E"; };
Player.prototype.filterRules.triples = (a) => { return a.playResult === "Triple" && (a.pitchResultCode == "E" || a.pitchResultCode == "D" || a.pitchResultCode == "X"); };
Player.prototype.filterRules.doubles = (a) => { return a.playResult === "Double" && (a.pitchResultCode == "E" || a.pitchResultCode == "D" || a.pitchResultCode == "X"); };
Player.prototype.filterRules.singles = (a) => { return a.playResult === "Single" && (a.pitchResultCode == "E" || a.pitchResultCode == "D" || a.pitchResultCode == "X"); };
