/* jshint esversion:6 */
PitcherConfig.prototype.defineBattedBallLocation = function() {
  const config = this;

  let group = {
    "heading":"Ball Location",
    "description":"Measures of batted ball tendencies against this pitcher.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"pull_field_against",
    "display":"Pull %",
    "description":"Percentage of balls hit to the pull field.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });

  group.metrics.push({
    "key":"center_field_against",
    "display":"Center %",
    "description":"Percentage of balls hit to center field.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });

  group.metrics.push({
    "key":"opposite_field_against",
    "display":"Opposite %",
    "description":"Percentage of balls hit to the opposite field.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });


  return group;
}
