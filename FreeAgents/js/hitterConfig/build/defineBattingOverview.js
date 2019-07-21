/* jshint esversion:6 */
HitterConfig.prototype.defineBattingOverview = function() {
  const config = this;
  let group;

  group = {
    "heading":"Batting Overview",
    "description":"Total contribution data from Fangraphs",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"less-production-more-production",
    "startGroup":true
  });

  group.metrics.push({
    "key":"weighted_on_base_average",
    "display":"wOBA",
    "description":"Weighted On-Base Average. Measures run expectancy from offensive contributions",
    "source":"Fangraphs",
    "relatedToNext":true,
    "shareScale":["expected_weighted_on_base_average"],
    "startGroup":true
  });

  group.metrics.push({
    "key":"expected_weighted_on_base_average",
    "display":"Expected wOBA",
    "description":"Expected Weighted On-Base Average. Attempts to correct wOba for luck.",
    "source":"Baseball Savant",
    "endGroup":true,
  });

  group.metrics.push({
    "isSpacer":true
  });


  // group.metrics.push({
  //   "key":"expected_weighted_on_base_average_on_contact",
  //   "display":"xWoba (Contact)",
  //   "description":"Expected Weighted On-Base Average on contact. Measures quality of contact on a wOba scale.",
  //   "source":"Baseball Savant"
  // });

  group.metrics.push({
    "isHeader":true,
    "headerType":"more-outs-fewer-outs",
    "startGroup":true
  });

  group.metrics.push({
    "key":"on_base_average",
    "display":"On Base Average",
    "description":"On Base Average. Measures rate of reaching base per plate appearance.",
    "source":"Fangraphs",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  group.metrics.push({
    "key":"",
    "display":"",
    "description":"",
    "source":"",
    "isHeader":true,
    "headerType":"worst-best",
    "startGroup":true
  });

  group.metrics.push({
    "key":"slugging",
    "display":"Slugging",
    "description":"Slugging Average. Measures total bases per at-bat.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "shareScale":["expected_slugging"]
  });

  group.metrics.push({
    "key":"expected_slugging",
    "display":"Expected Slugging",
    "description":"Expected Slugging Average. Attempts to correct slugging average for luck.",
    "source":"Baseball Savant",
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });


  group.metrics.push({
    "isHeader":true,
    "headerType":"less-power-more-power",
    "startGroup":true
  });

  group.metrics.push({
    "key":"iso",
    "display":"Isolated Power",
    "description":"Isolated Power. Measures slugging beyond singles.",
    "source":"Fangraphs",
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });


  group.metrics.push({
    "isHeader":true,
    "headerType":"worst-best",
    "startGroup":true
  });

  group.metrics.push({
    "key":"batting_average",
    "display":"Batting Average.",
    "description":"Measures hits per at-bats.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "shareScale":["expected_batting_average","batting_average_on_balls_in_play"],
    "startGroup":true
  });

  group.metrics.push({
    "key":"expected_batting_average",
    "display":"Expected Batting Average",
    "description":"Controls batting average for luck.",
    "source":"Baseball Savant",
    "relatedToNext":true,
  });


  group.metrics.push({
    "key":"batting_average_on_balls_in_play",
    "display":"BABIP",
    "description":"Batting Average on Balls in Play. Highly-variable measure that may indicate luck in batting.",
    "source":"Fangraphs",
    "endGroup":true
  });

  return group;
}
