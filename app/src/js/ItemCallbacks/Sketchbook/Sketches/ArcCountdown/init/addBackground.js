ArcCountdown.prototype.addBackground = function() {
  const countdown = this;
  return countdown.sketch.svg
    .append("rect")
    .attr("width",640)
    .attr("height",360)
    .attr("fill",countdown.backgroundColor);
}
