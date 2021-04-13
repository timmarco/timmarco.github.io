RadarSketch.prototype.addDefs = function() {
  const radar = this;
  return radar.sketch.svg
    .append("defs");
}
