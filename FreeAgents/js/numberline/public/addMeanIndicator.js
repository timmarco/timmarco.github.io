/* jshint esversion:6 */
Numberline.prototype.addmeanIndicator = function() {
  const chart = this;

  let indicator = chart.layers.summaryIndicators
    .append("line")
    .attr("y1",chart.margins.top)
    .attr("y2",chart.size.height - chart.margins.bottom)
    .attr("x1",chart.scale(chart.summaryData.mean))
    .attr("x2",chart.scale(chart.summaryData.mean))
    .attr("stroke",chart.styles.meanIndicatorStroke)
    .attr("stroke-width",chart.styles.meanIndicatorStrokeWidth);

  return indicator;
};
