/* jshint esversion:6 */
Slider.prototype.move = function(coordinates) {
  const slider = this;

  slider.group
    .attr("transform","translate("+coordinates.x+","+coordinates.y+")");

  return slider;
}
