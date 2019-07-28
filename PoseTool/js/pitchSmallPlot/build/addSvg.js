/* jshint esversion:6 */
PitchSmallPlot.prototype.addSvg = function() {
  const plot = this;
  let svg = plot.where
    .append("svg")
    .attr("width",150)
    .attr("height",175)
    .style("background-color","white")
    .style("border","1px solid #aaa");
  return svg;
};
