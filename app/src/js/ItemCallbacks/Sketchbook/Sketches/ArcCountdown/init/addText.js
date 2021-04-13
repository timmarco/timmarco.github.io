ArcCountdown.prototype.addText = function() {
  const countdown = this;
  return countdown.group
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","middle")
    .attr("font-size","72pt")
    .attr("font-family","Oswald")
    .attr("font-weight","bold")
    .attr("fill",countdown.foregroundColor)
    .attr("y",25)
    .html("0");
}
