/* global FunctionPlotterInput */
FunctionPlotterInput.prototype.addInputText = function() {
  const input = this;

  input.inputTextGhost = input.parent.group
    .append("text")
    .attr("x",input.plotter.xScale(input.data.input))
    .attr("y",-2)
    .attr("fill",input.textForeground)
    .attr("stroke",input.textBackground)
    .attr("stroke-width",input.textOutline)
    .attr("text-anchor","middle")
    .attr("alignment-baseline","ideographic")
    .attr("font-size",input.textSize)
    .attr("display","none")
    .attr("opacity",0)
    .text(input.data.input.toFixed(2));

  input.inputText = input.parent.group
    .append("text")
    .attr("x",input.plotter.xScale(input.data.input))
    .attr("y",-2)
    .attr("fill",input.textForeground)
    .attr("text-anchor","middle")
    .attr("alignment-baseline","ideographic")
    .attr("font-size",input.textSize)
    .attr("display","none")
    .attr("opacity",0)
    .text(input.data.input.toFixed(2));

  return input;
};
