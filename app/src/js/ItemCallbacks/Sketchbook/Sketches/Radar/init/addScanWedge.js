RadarSketch.prototype.addScanWedge = function() {
  const radar = this;

  const arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(150)
    .startAngle(0)
    .endAngle(radar.wedgeSize * Math.PI / 180);

  return radar.group
    .append("path")
    .attr("fill","url(#wedgeGradient)")
    .attr("stroke","none")
    .attr("d",arcGenerator);
}
