RadialGroup.prototype.addCircle = function() {
  const radial = this;
  return radial.group
    .append("circle")
    .attr("r",radial.radius)
    .attr("fill",d3.schemeCategory10[9])
}
