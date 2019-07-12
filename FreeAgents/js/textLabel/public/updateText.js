/* jshint esversion:6 */
TextLabel.prototype.updateText = function(newText) {
  const label = this;

  label.background.text(newText);
  label.foreground.text(newText);

  return label;
};
