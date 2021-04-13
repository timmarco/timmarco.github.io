RadarSketch.prototype.addPolarLines = function() {
  const radar = this;
  const lineData = d3.range(0,Math.PI * 2,Math.PI / 4);
  return radar.bogeyGroup
    .selectAll(".polarLine")
    .data(lineData)
    .enter()
    .append("line")
    .attr("x1",0)
    .attr("x2",(theta) => { return Math.cos(theta) * 150})
    .attr("y1",0)
    .attr("y2",(theta) => { return Math.sin(theta) * 150 })
    .attr("stroke",radar.green)
    .attr("stroke-width",1)
    .attr("stroke-dasharray","5,5")
}
