/* global FunctionPlotterInput */
FunctionPlotterInput.prototype.addInputCircle = function() {
  const input = this;

  if(isFinite(input.data.output)) {
    input.inputCircle = input.parent.group
      .append("circle")
      .attr("cx",input.plotter.xScale(input.data.input))
      .attr("cy",0)
      .attr("r",input.r)
      .attr("fill",input.fill)
      .attr("stroke",input.stroke)
      .attr("stroke-width",input.strokeWidth)
      .attr("cursor","pointer")
      .on('mouseover',input.mouseover())
      .on('mouseout',input.mouseout());
  } else {
    input.inputCircle = input.parent.group
      .append("circle")
      .attr("cx",input.plotter.xScale(input.data.input))
      .attr("cy",0)
      .attr("r",input.r)
      .attr("fill","white")
      .attr("stroke",input.fill)
      .attr("stroke-width",1)
      .attr("cursor","pointer")
      .on('mouseover',input.mouseover())
      .on('mouseout',input.mouseout());
  }

  return input;
};
