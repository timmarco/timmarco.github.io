RadarSketch.prototype.addBackground = function() {
  const radar = this;
  return radar.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill","black");
}
