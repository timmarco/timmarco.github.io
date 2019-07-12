/* jshint esversion:6 */
NumberlineReference.prototype.addSvg = function(where) {
  const chart = this;
  let svg;

  svg = where
    .append("svg")
    .attr("height",20)
    .attr("width",300);

  return svg;
};
