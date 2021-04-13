RadarSketch.prototype.addScanLine = function() {
  const radar = this;
  return radar.group
    .append("line")
    .attr("x1",0)
    .attr("x2",0)
    .attr("y1",0)
    .attr("y2",-150)
    .attr("stroke-width",3)
    .attr("stroke",radar.scanLineColor);
}
