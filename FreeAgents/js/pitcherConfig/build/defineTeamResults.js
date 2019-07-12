/* jshint esversion:6 */
PitcherConfig.prototype.defineTeamResults = function() {
  const config = this;

  let group = {
    "heading":"Team Results",
    "description":"Measures of plate appearance outcomes that may be influenced by factors beyond the pitcher's control.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"wOba_against",
    "display":"wOBA",
    "description":"Weighted On-Base Average for hitters facing this pitcher.",
    "source":"Baseball Savant",
    "relatedToNext":true,
    "shareScale":["xWobaAgainst"]
  });

  group.metrics.push({
    "key":"expected_woba_against",
    "display":"xWOBA",
    "description":"Expected Weighted On-Base Average for hitters facing this pitcher. Controls above measure for luck.",
    "source":"Baseball Savant",
    "scalePercentage":true
  });

  group.metrics.push({
    "key":"slugging_against",
    "display":"Slugging",
    "description":"Slugging average for hitters facing this pitcher.",
    "source":"Baseball Savant",
    "shareScale":["expected_slugging_against"]
  });

  group.metrics.push({
    "key":"expected_slugging_against",
    "display":"xSlugging",
    "description":"Expected slugging average for hitters facing this pitcher. Controls above measure for luck.",
    "source":"Baseball Savant",
  });

  group.metrics.push({
    "key":"batting_average_against",
    "display":"Batting Average",
    "description":"Batting average of hitters facing this pitcher.",
    "source":"Baseball Savant",
    "relatedToNext":true,
    "shareScale":["expected_batting_average_against"]
  });

  group.metrics.push({
    "key":"expected_batting_average_against",
    "display":"xBatting Average",
    "description":"Expected batting average of hitters facing this pitcher. Controls above measure for luck",
    "source":"Baseball Savant",
    "shareScale":["expected_batting_average_against"]
  });


  return group;
}
