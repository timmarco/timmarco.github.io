/* jshint esversion:6 */
HitterConfig.prototype.defineFangraphsValue = function() {
  const config = this;

  let group = {
    "heading":"Fangraphs",
    "description":"Total contribution data from Fangraphs",
    "headingType":"worse-better",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"fewer-wins-more-wins",
    "startGroup":true
  });

  group.metrics.push({
    "key":"fWar",
    "display":"WAR",
    "description":"Fangraphs Wins Above Replacement. Measures total player contribution in terms of marginal team wins.",
    "source":"Fangraphs",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true,
  });

  group.metrics.push({
    "key":"",
    "display":"",
    "description":"",
    "source":"",
    "isHeader":true,
    "headerType":"fewer-runs-more-runs",
    "startGroup":true
  });

  group.metrics.push({
    "key":"fWar_offense",
    "display":"Offensive",
    "description":"Fangraphs Offensive Component. Measures player's offensive contribution in terms of marginal runs produced.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "startGroup":true,
    "shareScale":["fWar_defense"]
  });

  group.metrics.push({
    "key":"fWar_defense",
    "display":"Defensive",
    "description":"Fangraphs Defensive Component. Measures players defensive contribution in terms of marginal runs prevented.",
    "source":"Fangraphs",
    "endGroup":true
  });

  return group;
}
