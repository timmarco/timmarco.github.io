/* jshint esversion:6 */
Player.prototype.filterRules = {};
Player.prototype.filterRules.balls = (a) => { return a.pitchResultCode === "B"; };
Player.prototype.filterRules.swings = (a) => { return a.pitchResultCode !== "B" && a.pitchResultCode !== "*B" && a.pitchResultCode !== "C"; };
Player.prototype.filterRules.totalStrikes = (a) => { return a.pitchResultCode == "S" || a.pitchResultCode === "C" || a.pitchResultCode === "F" || a.pitchResultCode === "T"; };
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
Player.prototype.filterRules.ballsInPlay = (a) => { return a.pitchResultCode === "D" || a.pitchResultCode === "X" || a.pitchResultCode === "E" ;};
Player.prototype.filterRules.outs = (a) => { return a.pitchResultCode === "X" ;};
Player.prototype.filterRules.hits = (a) => { return (a.pitchResultCode === "D" || a.pitchResultCode === "E") && (a.playResult == "Home Run" || a.playResult == "Double" || a.playResult == "Triple" || a.playResult === "Single")  ;};

Player.prototype.filterRules.FF = (a) => { return a.pitchType == "FF"; };
Player.prototype.filterRules.FT = (a) => { return a.pitchType == "FT"; };
Player.prototype.filterRules.CU = (a) => { return a.pitchType == "CU"; };
Player.prototype.filterRules.CH = (a) => { return a.pitchType == "CH"; };
Player.prototype.filterRules.SL = (a) => { return a.pitchType == "SL"; };
Player.prototype.filterRules.FC = (a) => { return a.pitchType == "FC"; };
Player.prototype.filterRules.FS = (a) => { return a.pitchType == "FS"; };
Player.prototype.filterRules.SI = (a) => { return a.pitchType == "SI"; };
Player.prototype.filterRules.KC = (a) => { return a.pitchType == "KC"; };
Player.prototype.filterRules.KN = (a) => { return a.pitchType == "KN"; };


/*
  Play Types Are:
  'Groundout',
  'Strikeout',
  'Pop Out',
  'Flyout',
  'Lineout',
  'Single',
  'Double',
  'Home Run',
  'Walk',
  'Field Error',
  'Grounded Into DP'
*/
