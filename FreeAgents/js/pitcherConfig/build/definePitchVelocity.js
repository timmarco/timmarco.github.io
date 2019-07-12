/* jshint esversion:6 */
PitcherConfig.prototype.definePitchVelocity = function() {
  const config = this;

  let group = {
    "heading":"Pitch Velocity",
    "description":"Velocity by Pitch Type.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"four_seam_velocity",
    "display":"Four-Seam",
    "description":"Average Velocity of Four-Seam Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"cut_fastball_velocity",
    "display":"Cut Fastball",
    "description":"Average Velocity of Cut Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"sinker_velocity",
    "display":"Sinker Fastball",
    "description":"Average Velocity of Sinkers.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"splitter_velocity",
    "display":"Splitter",
    "description":"Average Velocity of Split-Finger Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"slider_velocity",
    "display":"Slider",
    "description":"Average Velocity of Sliders.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"curveball_velocity",
    "display":"Curveball",
    "description":"Average Velocity of Curveballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"slider_velocity",
    "display":"Changeup",
    "description":"Average Velocity of Changeups.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"knuckleball_velocity",
    "display":"Knuckleball",
    "description":"Average Velocity of Cut Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  return group;
}
