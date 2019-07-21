/* jshint esversion:6 */
HitterConfig.prototype.defineBattingResults = function() {
  const config = this;

  let group = {
    "heading":"Batting Results",
    "description":"Measures of the results of the player's hitting.",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"slower-faster-hits"
  });

  group.metrics.push({
    "key":"average_exit_velocity",
    "display":"Exit Velocity",
    "description":"Average velocity of balls hit in play.",
    "source":"Baseball Savant",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  group.metrics.push({
    "isHeader":true,
    "headerType":"lower-higher",
    "startGroup":true
  });

  group.metrics.push({
    "key":"average_launch_angle",
    "display":"Launch Angle",
    "description":"Average launch angle of balls hit in play.",
    "source":"Baseball Savant",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  group.metrics.push({
    "isHeader":true,
    "headerType":"groundballs-flyballs",
    "startGroup":true
  });

  group.metrics.push({
    "key":"groundballs_per_flyball",
    "display":"GB/FB",
    "description":"Ground balls per fly ball",
    "source":"Fangraphs",
    "startGroup":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  group.metrics.push({
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true
  });

  group.metrics.push({
    "key":"line_drive_rate",
    "display":"Line Drive",
    "description":"Fly ball percentage.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true,
    "startGroup":true,
  });


  group.metrics.push({
    "key":"fly_ball_rate",
    "display":"Fly Balls",
    "description":"Fly ball percentage.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"ground_ball_rate",
    "display":"Ground Ball",
    "description":"Ground ball percentage.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "endGroup":true
  });

  group.metrics.push({
    "isSpacer":true
  });

  group.metrics.push({
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true
  });

  group.metrics.push({
    "key":"strong_hits",
    "display":"Strong Hits",
    "description":"Batted balls classified as 'Strong'",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true,
    "startGroup":true
  });

  group.metrics.push({
    "key":"medium_hits",
    "display":"Medium Hits",
    "description":"Batted balls classified as 'Medium'",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"weak_hits",
    "display":"Weak Hits",
    "description":"Batted balls classified as 'Weak'",
    "source":"Fangraphs",
    "scalePercentage":true,
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
    "headerType":"never-always",
    "startGroup":true,
    "relatedToNext":true,
  });


  group.metrics.push({
    "key":"pull_field_percentage",
    "display":"Pull",
    "description":"Percentage of batted balls hit to the pull field.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "startGroup":true
  });

  group.metrics.push({
    "key":"center_field_percentage",
    "display":"Center",
    "description":"Percentage of batted balls hit to centerfield.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true
  });

  group.metrics.push({
    "key":"opposite_field_percentage",
    "display":"Opposite",
    "description":"Percentage of batted balls hit to the opposite field.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "endGroup":true
  });




  return group;
}
