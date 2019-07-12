/* jshint esversion:6 */
TextLabel.prototype.move = function(position) {
  const label = this;

  label.group
    .attr("transform","translate("+position.x+","+position.y+")");

  return this;
};
