/* global CartesianFunction */
CartesianFunction.prototype.addPath = function() {
  const plottedFunction = this;

  plottedFunction.path = plottedFunction.plot.functionGroup
    .append("path")
    .attr("stroke",plottedFunction.stroke)
    .attr("stroke-width",plottedFunction.strokeWidth)
    .attr("stroke-dasharray",plottedFunction.strokeDashArray)
    .attr("fill","none");

  return plottedFunction;
};
