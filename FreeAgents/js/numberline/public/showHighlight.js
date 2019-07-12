/* jshint esversion:6 */
Numberline.prototype.showHighlight = function(datum) {
  const chart = this;

  chart.highlightCircle
    .attr("cx",chart.scale(datum.value))
    .style("display","block");

  return chart;
};
