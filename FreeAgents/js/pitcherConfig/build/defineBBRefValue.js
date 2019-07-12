/* jshint esversion:6 */
PitcherConfig.prototype.defineBBRefValue = function() {
  const config = this;

  let group = {
    "heading":"Baseball-Reference",
    "description":"Total contribution data from Baseball-Reference.com",
    "metrics":[]
  };

  group.metrics.push({
    "key":"bWar",
    "display":"WAR",
    "description":"Baseball-Reference Wins Above Replacement. Measures total player contribution in terms of marginal team wins.",
    "source":"Baseball-Reference",
  });

  return group;
};
