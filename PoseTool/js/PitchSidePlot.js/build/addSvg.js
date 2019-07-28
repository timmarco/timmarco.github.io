/* jshint esversion:6 */
PitchSidePlot.prototype.addSvg = function() {
  const plot = this;
  let svg = plot.where
    .append("svg")
    .attr("width",450)
    .attr("height",50)
    .style("background-color","white");

  return svg;
};
