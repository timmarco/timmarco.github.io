/* jshint esversion:6 */
Player.prototype.defineHighlightRules = function() {
  const player = this;

  player.highlightBalls = player.constructHighlightRule(player.filterRules.balls);
  player.highlightSwingingStrikes = player.constructHighlightRule(player.filterRules.swingingStrikes);
  player.highlightInPlayNoOuts = player.constructHighlightRule(player.filterRules.inPlayNoOuts);
  player.highlightInPlayOuts = player.constructHighlightRule(player.filterRules.inPlayOuts);
  player.highlightFouls = player.constructHighlightRule(player.filterRules.fouls);
  player.highlightFoulTips = player.constructHighlightRule(player.filterRules.foulTips);
  player.highlightCalledStrikes = player.constructHighlightRule(player.filterRules.calledStrikes);

  player.highlightHomeRuns = player.constructHighlightRule(player.filterRules.homeRuns);
  player.highlightTriples = player.constructHighlightRule(player.filterRules.triples);
  player.highlightDoubles = player.constructHighlightRule(player.filterRules.doubles);
  player.highlightSingles = player.constructHighlightRule(player.filterRules.singles);


};
