/* jshint esversion:6 */
ModelSlider.prototype.addGroup = function(where) {
  const slider = this;

  let group = where
    .append("g")
    .attr("transform","translate("+slider.coordinates.x+","+slider.coordinates.y+")")
    .on('mouseover',slider.groupMouseover())
    .on('mouseout',slider.groupMouseout());

  return group;
}
