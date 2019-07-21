/* jshint esversion:6 */
PitcherConfig.prototype.defineBBRefValue = function() {
  const config = this;

  let group = {
    "heading":"Baseball-Reference",
    "description":"Total contribution data from Baseball-Reference.com",
    "metrics":[]
  };

  group.metrics.push({
    "key":"",
    "display":"",
    "description":"",
    "source":"",
    "isHeader":true,
    "headerType":"fewer-wins-more-wins",
    "startGroup":true
  });


  group.metrics.push({
    "key":"bWar",
    "display":"WAR",
    "description":"Baseball-Reference Wins Above Replacement. Measures total player contribution in terms of marginal team wins.",
    "source":"Baseball-Reference",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  return group;
};
