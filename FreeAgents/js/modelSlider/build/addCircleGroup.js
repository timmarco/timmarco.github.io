/* jshint esversion:6 */
ModelSlider.prototype.addCircleGroup = function() {
  const slider = this;

  let group = slider.layers.circle
    .append("g")
    .attr("cursor","pointer")
    .on('mouseover',slider.circleGroupMouseover())
    .on('mouseout',slider.circleGroupMouseout())
    .call(d3.drag()
      .on('start',slider.circleGroupDragStart())
      .on('drag',slider.circleGroupDrag())
      .on('end',slider.circleGroupDragEnd())
    );

  return group;
}
