ArcCountdown.prototype.addHotspot = function() {
  const countdown = this;
  return countdown.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill","rgba(0,0,0,0)");
}
