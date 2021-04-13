RadarSketch.prototype.addHotspot = function() {
  const radar = this;
  radar.sketch.svg
    .append("rect")
    .attr("width",500)
    .attr("height",500)
    .attr("fill","rgba(0,0,0,0)");
}
