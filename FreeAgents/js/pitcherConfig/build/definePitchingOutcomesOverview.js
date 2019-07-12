/* jshint esversion:6 */
PitcherConfig.prototype.definePitchingOutcomesOverview = function() {
  const config = this;

  let group = {
    "heading":"Pitching Outcomes Overview",
    "description":"Measures of the end results of plate appearances.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"fielding_independent_pitching",
    "display":"FIP",
    "description":"Fielding Independent Pitching. Estimates pitcher ERA based on outcomes entirely under his control.",
    "source":"Fangraphs",
    "shareScale":["expected_fielding_independent_pitching"],
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"expected_fielding_independent_pitching",
    "display":"xFIP",
    "description":"Expected Fielding Independent Pitching. Controls the above measure for luck.",
    "source":"Fangraphs",
    "shareScale":[]
  });

  group.metrics.push({
    "key":"runs_allowed_per_nine_innings",
    "display":"RA/9",
    "description":"Total number of runs (earned and unearned) allowed by a pitcher per nine innings.",
    "source":"Fangraphs",
    "shareScale":[]
  });



  return group;
}
