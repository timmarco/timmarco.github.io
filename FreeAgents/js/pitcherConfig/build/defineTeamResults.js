/* jshint esversion:6 */
PitcherConfig.prototype.defineTeamResults = function() {
  const config = this;

  let group = {
    "heading":"Team Results",
    "description":"Measures of plate appearance outcomes that may be influenced by factors beyond the pitcher's control.",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"fewer-runs-more-runs",
    "startGroup":true
  });

  // group.metrics.push({
  //   "key":"weighted_on_base_average_against",
  //   "display":"wOBA",
  //   "description":"Weighted On-Base Average for hitters facing this pitcher.",
  //   "source":"Fangraphs",
  //   "relatedToNext":true,
  //   "shareScale":["expected_weighted_on_base_average"],
  //   "startGroup":true
  // });

  group.metrics.push({
    "key":"expected_weighted_on_base_average_against",
    "display":"xWOBA",
    "description":"Expected Weighted On-Base Average for hitters facing this pitcher. Controls above measure for luck.",
    "source":"Baseball Savant",
    "endGroup":true,
    "startGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  })

  group.metrics.push({
    "isHeader":true,
    "startGroup":true,
    "headerType":"fewer-runs-more-runs",
  });

  group.metrics.push({
    "key":"expected_slugging_against",
    "display":"xSlugging",
    "description":"Expected slugging average for hitters facing this pitcher. Controls above measure for luck.",
    "source":"Baseball Savant",
    "endGroup":true,
    "startGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  })

  // group.metrics.push({
  //   "key":"batting_average_against",
  //   "display":"Batting Average",
  //   "description":"Batting average of hitters facing this pitcher.",
  //   "source":"Baseball Savant",
  //   "relatedToNext":true,
  //   "shareScale":["expected_batting_average_against"]
  // });


  group.metrics.push({
    "isHeader":true,
    "startGroup":true,
    "headerType":"fewer-hits-more-hits"
  })

  group.metrics.push({
    "key":"expected_batting_average_against",
    "display":"xBatting Average",
    "description":"Expected batting average of hitters facing this pitcher. Controls above measure for luck",
    "source":"Baseball Savant",
    "endGroup":true,
    "startGroup":true
  });


  return group;
}
