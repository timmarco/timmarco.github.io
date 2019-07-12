/* jshint esversion:6 */
TextLabel.prototype.show = function() {
  const label = this;

  label.group
    .style("display","block");

  return label;
};
