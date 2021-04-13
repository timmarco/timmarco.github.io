RadarSketch.prototype.addGroup = function() {
  const radar = this;
  return radar.rotateGroup
    .append("g");
}
