/* global FunctionPlotterInput */
FunctionPlotterInput.prototype.addOutputText = function() {
  const input = this;

  if(isFinite(input.data.output)) {
    input.outputTextGhost = input.parent.group
      .append("text")
      .attr("x",input.plotter.xScale(input.data.output))
      .attr("y",input.parent.height + 5)
      .attr("fill",input.textForeground)
      .attr("stroke",input.textBackground)
      .attr("stroke-width",input.textOutline)
      .attr("text-anchor","middle")
      .attr("alignment-baseline","text-before-edge")
      .attr("font-size",input.textSize)
      .attr("display","none")
      .attr("opacity",0)
      .text(input.data.output.toFixed(2));

    input.outputText = input.parent.group
      .append("text")
      .attr("x",input.plotter.xScale(input.data.output))
      .attr("y",input.parent.height + 5)
      .attr("fill",input.textForeground)
      .attr("text-anchor","middle")
      .attr("alignment-baseline","text-before-edge")
      .attr("font-size",input.textSize)
      .attr("display","none")
      .attr("opacity",0)
      .text(input.data.output.toFixed(2));    
  }

  return input;
};
