ArcCountdown.prototype.addArc = function() {
  const countdown = this;
  return countdown.arcGroup
    .append("path")
    .attr("fill",countdown.foregroundColor)
    .attr("stroke","none");
}
