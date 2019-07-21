/* jshint esversion:6 */
HitterConfig.prototype.defineBBRefValue = function() {
  const config = this;

  let group = {
    "heading":"Baseball-Reference",
    "description":"Total contribution data from Baseball-Reference.com",
    "metrics":[]
  };

  group.metrics.push({
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


  group.metrics.push({
    "isHeader":true,
    "headerType":"fewer-runs-more-runs",
    "startGroup":true
  });


  group.metrics.push({
    "key":"bOWar",
    "display":"Offense",
    "description":"Baseball-Reference Offensive Component. Measures player's offensive contribution in terms of marginal team wins.",
    "source":"Baseball-Reference",
    "relatedToNext":true,
    "startGroup":true,
    "shareScale":["bDWar"]
  });

  group.metrics.push({
    "key":"bDWar",
    "display":"Defense",
    "description":"Baseball-Reference Defensive Component. Measures players defensive contribution in terms of marginal team wins.",
    "source":"Baseball-Reference",
    "endGroup":true
  });

  return group;
}
