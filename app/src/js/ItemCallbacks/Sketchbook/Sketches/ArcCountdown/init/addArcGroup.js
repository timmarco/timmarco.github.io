ArcCountdown.prototype.addArcGroup = function() {
  const countdown = this;
  return countdown.group
    .append("g")
    .attr("transform","rotate(-90)");
}
