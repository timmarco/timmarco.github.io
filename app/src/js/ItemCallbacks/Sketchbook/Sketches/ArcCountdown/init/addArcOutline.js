ArcCountdown.prototype.addArcOutline = function() {
  const countdown = this;
  return countdown.arcGroup
    .append("path")
    .attr("fill","none")
    .attr("stroke",countdown.frameColor)
    .attr("stroke-width",2);

}
