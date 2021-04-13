RadarSketch.prototype.addReticle = function() {
  const radar = this;
  return radar.group
    .append("circle")
    .attr("fill",radar.green)
    .attr("r",5);
}
