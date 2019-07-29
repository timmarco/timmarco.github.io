/* jshint esversion:6 */
Player.prototype.defineHighlightRules = function() {
  const player = this;

  player.highlightInRegion = player.constructHighlightRule((a) => { return true; },"#666");
  player.highlightSwings = player.constructHighlightRule(player.filterRules.swings,"#666");
  player.highlightTotalStrikes = player.constructHighlightRule(player.filterRules.totalStrikes,d3.schemeCategory10[1]);
  player.highlightBalls = player.constructHighlightRule(player.filterRules.balls,d3.schemeCategory10[0]);
  player.highlightSwingingStrikes = player.constructHighlightRule(player.filterRules.swingingStrikes,d3.schemeCategory10[1]);
  player.highlightInPlayNoOuts = player.constructHighlightRule(player.filterRules.inPlayNoOuts,d3.schemeCategory10[2]);
  player.highlightInPlayOuts = player.constructHighlightRule(player.filterRules.inPlayOuts,d3.schemeCategory10[3]);
  player.highlightFouls = player.constructHighlightRule(player.filterRules.fouls,d3.schemeCategory10[1]);
  player.highlightFoulTips = player.constructHighlightRule(player.filterRules.foulTips,d3.schemeCategory10[1]);
  player.highlightCalledStrikes = player.constructHighlightRule(player.filterRules.calledStrikes,d3.schemeCategory10[1]);

  player.highlightHomeRuns = player.constructHighlightRule(player.filterRules.homeRuns,d3.schemeCategory10[2]);
  player.highlightTriples = player.constructHighlightRule(player.filterRules.triples,d3.schemeCategory10[2]);
  player.highlightDoubles = player.constructHighlightRule(player.filterRules.doubles,d3.schemeCategory10[2]);
  player.highlightSingles = player.constructHighlightRule(player.filterRules.singles,d3.schemeCategory10[2]);

  player.highlightBallsInPlay = player.constructHighlightRule(player.filterRules.ballsInPlay,"#666");
  player.highlightOuts = player.constructHighlightRule(player.filterRules.outs,d3.schemeCategory10[3]);
  player.highlightHits = player.constructHighlightRule(player.filterRules.hits,d3.schemeCategory10[2]);


  player.highlightFF = player.constructHighlightRule(player.filterRules.FF,"#666");
  player.highlightFT = player.constructHighlightRule(player.filterRules.FT,"#666");
  player.highlightCU = player.constructHighlightRule(player.filterRules.CU,"#666");
  player.highlightCH = player.constructHighlightRule(player.filterRules.CH,"#666");
  player.highlightSL = player.constructHighlightRule(player.filterRules.SL,"#666");
  player.highlightFC = player.constructHighlightRule(player.filterRules.FC,"#666");
  player.highlightFS = player.constructHighlightRule(player.filterRules.FS,"#666");
  player.highlightSI = player.constructHighlightRule(player.filterRules.SI,"#666");
  player.highlightKC = player.constructHighlightRule(player.filterRules.KC,"#666");
  player.highlightKN = player.constructHighlightRule(player.filterRules.KN,"#666");

};
