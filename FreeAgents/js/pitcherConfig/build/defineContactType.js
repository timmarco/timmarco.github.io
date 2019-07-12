/* jshint esversion:6 */
PitcherConfig.prototype.defineContactType = function() {
  const config = this;

  let group = {
    "heading":"Contact Strength",
    "description":"Measures of the strength of contact of hits against the pitcher.",
    "metrics":[]
  };

  group.metrics.push({
    "key":"hard_hits_against",
    "display":"Hard %",
    "description":"Percentage of contact classified as 'Hard'.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });

  group.metrics.push({
    "key":"medium_hits_against",
    "display":"Medium %",
    "description":"Percentage of contact classified as 'Medium'.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });

  group.metrics.push({
    "key":"soft_hits_against",
    "display":"Soft %",
    "description":"Percentage of contact classified as 'Soft'.",
    "source":"Fangraphs",
    "relatedToNext":true,
    "scalePercentage":true
  });


  return group;
}
