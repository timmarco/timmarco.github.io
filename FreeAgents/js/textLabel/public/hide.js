/* jshint esversion:6 */
TextLabel.prototype.hide = function() {
  const label = this;

  label.group
    .style("display","none");

  return label;
};
