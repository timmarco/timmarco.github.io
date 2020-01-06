TimelineRole.prototype.animateIn = function(delay) {
  const role = this;

  const timelineWidth = role.parent.scale(role.data.startDate) - role.parent.scale(role.data.endDate);
  const startTime = delay;

  role.name
    .attr("opacity",0)
    .attr("dx",-timelineWidth)
    .transition()
    .delay(startTime)
    .duration(1000)
    .attr("opacity",1)
    .attr("dx",0);

  role.dates
    .attr("opacity",0)
    .attr("dx",-timelineWidth)
    .transition()
    .delay(startTime)
    .duration(1000)
    .attr("opacity",1)
    .attr("dx",0);;

  role.backgroundRect
    .attr("width",0)
    .transition()
    .delay(startTime)
    .duration(1000)
    .attr("width",timelineWidth);

}
