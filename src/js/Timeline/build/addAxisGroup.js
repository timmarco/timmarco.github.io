Timeline.prototype.addAxisGroup = function() {
  const timeline = this;

  const group = timeline.layers.axis
    .append("g")
    .call(timeline.axis)
    .attr("transform",timeline.layout.translateAxisGroup);

  group.selectAll("path")
    .attr("stroke",timeline.style.axisLineColor);

  group.selectAll("line")
    .attr("stroke-width",1)
    .attr("stroke-dasharray","3,3")
    .attr("y1",window.innerHeight)
    .attr("stroke",timeline.style.axisDashColor);

  group.selectAll("text")
    .attr("text-anchor", "start")
    .attr("alignment-baseline","central")
    .attr("font-size",timeline.style.axisFontSize)
    .attr("fill",timeline.style.axisFontColor)
    .attr("font-weight",timeline.style.axisFontWeight)
    .attr("font-family","Oswald")
    .attr("dx", ".8em")
    .attr("dy", "-.15em")
    .attr("transform", "rotate(-45)");


  return group;
}
