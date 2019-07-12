/* jshint esversion:6 */
Slider.prototype.addLabel = function() {
  const slider = this;
  let text;

  text = new TextLabel({
    "text":slider.labelText,
    "where":slider.layers.text
  }).show()
  .move(slider.referencePoints.labelPosition);

  return text;
};
