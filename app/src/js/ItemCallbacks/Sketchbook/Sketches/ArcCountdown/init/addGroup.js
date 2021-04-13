ArcCountdown.prototype.addGroup = function() {
  const countdown = this;
  return countdown.sketch.svg
    .append("g")
    .attr("transform","translate(320,225)");
}
