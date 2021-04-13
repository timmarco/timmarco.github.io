RadialGroup.prototype.addGradient = function() {
  const radial = this;
  const gradient = radial.defs
    .append("radialGradient")
    .attr("id","background");

  gradient
    .append("stop")
    .attr("stop-color",d3.schemeCategory10[0])
    .attr("offset","30%");

  gradient
    .append("stop")
    .attr("stop-color","rgba(31, 119, 180,0.75)")
    .attr("offset","100%");

  return gradient;
}
