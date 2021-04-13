RadarSketch.prototype.addRotateGroup = function() {
  const radar = this;
  return radar.translateGroup
    .append("g");
}
