/* jshint esversion:6 */
PitcherConfig.prototype.definePitcherControl = function() {
  const config = this;

  let group = {
    "heading":"Under Pitcher's Control",
    "description":"Measures of plate appearance outcomes that are entirely under the pitcher's control.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"strikeout_rate",
    "display":"Strikeouts / 9",
    "description":"Strikeouts per nine innings.",
    "source":"Fangraphs",
    "shareScale":["walk_rate","home_run_rate"],
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"walk_rate",
    "display":"Walks / 9",
    "description":"Walks issued per nine innings.",
    "source":"Fangraphs",
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"strikeout_to_walk_ratio",
    "display":"Strikeouts : Walks",
    "description":"Strikeouts to walks issued ratio.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"home_run_rate",
    "display":"HR %",
    "description":"Home runs allowed per nine innings.",
    "source":"Fangraphs",
  });

  group.metrics.push({
    "key":"batted_ball_velocity",
    "display":"Hit Velocity",
    "description":"Average velocity of batted balls against the pitcher.",
    "source":"Baseball Savant"
  });


  group.metrics.push({
    "key":"barrel_rate_against",
    "display":"Barrel %",
    "description":"Percentage of very hard hits per contact.",
    "source":"Baseball Savant"
  });


  return group;
}
