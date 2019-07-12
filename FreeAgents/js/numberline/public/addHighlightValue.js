/* jshint esversion:6 */
Numberline.prototype.addHighlightValue = function(datum) {
  const chart = this;

  let circle;

  circle = chart.layers.activeLayer
    .append("circle")
    .attr("cy",chart.referencePoints.midline)
    .attr("cx",chart.scale(datum))
    .attr("r",chart.styles.highlightedCircleRadius)
    .attr("stroke","black")
    .attr("fill",chart.styles.highlightedCircleFill);

  return chart;
};
