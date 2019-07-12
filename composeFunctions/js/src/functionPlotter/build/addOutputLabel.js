/* global FunctionPlotter */
FunctionPlotter.prototype.addOutputLabel = function() {
  const plotter = this;

  plotter.outputLabel = plotter.svg
    .append("text")
    .attr("x",plotter.margins.left - 10)
    .attr("y",0)
    .attr("text-anchor","end")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .text("Output");

  return plotter;
};
