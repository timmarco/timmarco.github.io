Timeline.prototype.addAxis = function() {
  const timeline = this;

  const axis = d3.axisTop(timeline.scale);


  return axis;
}
