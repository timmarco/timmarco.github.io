/* jshint esversion:6 */
Slider.prototype.addValueLabel = function() {
  const slider = this;
  let text;

  text = new TextLabel({
    "text":slider.datum.value,
    "where":slider.layers.text,
    "textAnchor":"start",
    "fontSize":"16px"
  }).show()
  .move({
    "x":slider.referencePoints.valueLabelCenterX,
    "y":slider.referencePoints.circleCenterY
  });

  return text;
};
