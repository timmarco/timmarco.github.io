/* jshint esversion:6 */
Numberline.prototype.addTwoStandardDeviationIndicators = function() {
  const chart = this;

  let indicator;

  indicator = chart.layers.summaryIndicators
    .append("rect")
    .attr("x",chart.scale(chart.summaryData.twoBelowStandardDeviation))
    .attr("y",chart.margins.top + 4)
    .attr("width",chart.scale(chart.summaryData.twoAboveStandardDeviation) - chart.scale(chart.summaryData.twoBelowStandardDeviation))
    .attr("height",chart.referencePoints.effectiveHeight - 8)
    .attr("fill",chart.styles.twoStandardDeviationIndicatorFill);

  return indicator;
};
