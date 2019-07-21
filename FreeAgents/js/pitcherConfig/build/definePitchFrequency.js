/* jshint esversion:6 */
PitcherConfig.prototype.definePitchFrequency = function() {
  const config = this;

  let group = {
    "heading":"Pitch Frequency",
    "description":"Frequency by Pitch Type.",
    "metrics":[]
  };

  group.metrics.push({
    "isHeader":true,
    "headerType":"never-always",
    "startGroup":true
  });

  group.metrics.push({
    "key":"four_seam_frequency",
    "display":"Four-Seam",
    "description":"Frequency of Four-Seam Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"cut_fastball_frequency",
    "display":"Cut Fastball",
    "description":"Frequency of Cut Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"sinker_frequency",
    "display":"Sinker",
    "description":"Frequency of Sinkers.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  })

  group.metrics.push({
    "key":"splitter_frequency",
    "display":"Splitter",
    "description":"Frequency of Split-Finger Fastballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"slider_frequency",
    "display":"Slider",
    "description":"Frequency of Sliders.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  group.metrics.push({
    "key":"curveball_frequency",
    "display":"Curveball",
    "description":"Frequency of Curveballs.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });

  group.metrics.push({
    "key":"slider_frequency",
    "display":"Changeup",
    "description":"Frequency of Changeups.",
    "source":"Fangraphs",
    "scalePercentage":true,
    "relatedToNext":true,
    "isPitchType":true
  });


  return group;
}
