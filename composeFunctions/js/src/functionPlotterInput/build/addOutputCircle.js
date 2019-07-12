/* global FunctionPlotterInput */
FunctionPlotterInput.prototype.addOutputCircle = function() {
  const input = this;

  if(isFinite(input.data.output)) {
    input.outputCircle = input.parent.group
      .append("circle")
      .attr("cx",input.plotter.xScale(input.data.output))
      .attr("cy",input.parent.height)
      .attr("r",input.r)
      .attr("fill",input.fill)
      .attr("stroke",input.stroke)
      .attr("stroke-width",input.strokeWidth);
  }

  return input;
};
