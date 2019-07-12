/* global FunctionPlotter */
FunctionPlotter.prototype.addInputLabel = function() {
  const plotter = this;

  plotter.inputLabel = plotter.svg
    .append("text")
    .attr("x",plotter.margins.left - 10)
    .attr("y",plotter.margins.top)
    .attr("text-anchor","end")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .text("Input");

  return plotter;
};
