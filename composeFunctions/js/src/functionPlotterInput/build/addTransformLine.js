/* global FunctionPlotterInput */
FunctionPlotterInput.prototype.addTransformLine = function() {
  const input = this;

  if(isFinite(input.data.output)) {
    input.line = input.parent.group
      .append("line")
      .attr("x1",input.plotter.xScale(input.data.input))
      .attr("x2",input.plotter.xScale(input.data.output))
      .attr("y1",0)
      .attr("y2",input.parent.height)
      .attr("stroke",input.lineStroke)
      .attr("stroke-width",input.lineStrokeWidth);
  }

  return input;
};
