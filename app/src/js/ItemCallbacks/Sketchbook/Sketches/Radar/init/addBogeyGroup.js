RadarSketch.prototype.addBogeyGroup = function() {
  const radar = this;
  return radar.sketch.svg
    .append("g")
    .attr("transform","translate(300,180)");
}
