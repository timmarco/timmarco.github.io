/* global FunctionPlotter */
/* global d3 */
FunctionPlotter.prototype.addSvg = function() {
  const plotter = this;
  let selection = d3.select(plotter.where);

  plotter.svg = selection
    .append("svg")
    .attr("width",plotter.width)
    .attr("height",plotter.height)
    .on('mouseouver',plotter.mouseover())
    .on('mouseout',plotter.mouseout())
    .on('mousemove',plotter.mousemove());

  return plotter;
};
