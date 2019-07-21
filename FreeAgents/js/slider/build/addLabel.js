/* jshint esversion:6 */
Slider.prototype.addLabel = function() {
  const slider = this;
  let text;

  text = new TextLabel({
    "text":slider.labelText,
    "where":slider.layers.text,
    "text-anchor":"middle"
  }).show()
  .move(slider.referencePoints.labelPosition);

  return text;
};
