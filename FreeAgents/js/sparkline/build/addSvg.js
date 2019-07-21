/* jshint esversion:6 */
Sparkline.prototype.addSvg = function(where) {
  const spark = this;

  let svg = where
    .append("svg")
    .attr("height",spark.size.height)
    .attr("width",spark.size.width);

  return svg;
};
