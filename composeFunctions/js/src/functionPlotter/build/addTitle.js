/* global FunctionPlotter */
FunctionPlotter.prototype.addTitle = function() {
  const plotter = this;

  plotter.titleForeignObject = plotter.svg
    .append("foreignObject")
    .attr("width",plotter.width)
    .attr("height",plotter.margins.top);

  plotter.titleForeignBody = plotter.titleForeignObject
    .append("xhtml:body")
    .html(plotter.titleString);

  return this;
};
