/* jshint esversion:6 */
Modeler.prototype.addSvg = function(where) {
  const modeler = this;
  let svg;

  svg = d3.select(where)
    .append("svg")
    .attr("width",modeler.size.width)
    .attr("height",modeler.size.height);

  return svg;
};
