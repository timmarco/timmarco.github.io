/* jshint esversion:6 */
PitcherConfig.prototype.defineFangraphsValue = function() {
  const config = this;

  let group = {
    "heading":"Fangraphs",
    "description":"Total contribution data from Fangraphs",
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
    "key":"fWar",
    "display":"WAR",
    "description":"Fangraphs Wins Above Replacement. Measures total player contribution in terms of marginal team wins.",
    "source":"Fangraphs",
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });


  return group;
};
