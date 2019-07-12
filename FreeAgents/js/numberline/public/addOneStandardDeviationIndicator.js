/* jshint esversion: 6*/
Numberline.prototype.addOneStandardDeviationIndicator = function() {
  const chart = this;

  let indicator;

  indicator = chart.layers.summaryIndicators
    .append("rect")
    .attr("x",chart.scale(chart.summaryData.oneBelowStandardDeviation))
    .attr("y",chart.margins.top)
    .attr("width",chart.scale(chart.summaryData.oneAboveStandardDeviation) - chart.scale(chart.summaryData.oneBelowStandardDeviation))
    .attr("height",chart.size.height - chart.margins.top - chart.margins.bottom)
    .attr("fill",chart.styles.oneStandardDeviationIndicatorFill);

  return indicator;
};
