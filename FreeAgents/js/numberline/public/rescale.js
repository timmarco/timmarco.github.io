/* jshint esversion:6 */
Numberline.prototype.rescale = function(newDomain) {
  const chart = this;

  chart.scale
    .domain(newDomain);

  chart.backgroundCircles
    .attr("cx",function(d) { return chart.scale(d.value); });

  chart.meanText
    .attr("x",chart.scale(chart.summaryData.mean));

  chart.meanIndicator
    .attr("x1",chart.scale(chart.summaryData.mean))
    .attr("x2",chart.scale(chart.summaryData.mean));

  chart.oneDeviationText.positive
    .attr("x",chart.scale(chart.summaryData.oneAboveStandardDeviation));

  chart.oneDeviationText.negative
    .attr("x",chart.scale(chart.summaryData.oneBelowStandardDeviation));

  chart.twoDeviationText.positive
    .attr("x",chart.scale(chart.summaryData.twoAboveStandardDeviation));

  chart.twoDeviationText.negative
    .attr("x",chart.scale(chart.summaryData.twoBelowStandardDeviation));

  chart.oneStandardDeviationIndicator
    .attr("x",chart.scale(chart.summaryData.oneBelowStandardDeviation))
    .attr("width",chart.scale(chart.summaryData.oneAboveStandardDeviation) - chart.scale(chart.summaryData.oneBelowStandardDeviation));

  chart.twoStandardDeviationIndicators
    .attr("x",chart.scale(chart.summaryData.twoBelowStandardDeviation))
    .attr("width",chart.scale(chart.summaryData.twoAboveStandardDeviation) - chart.scale(chart.summaryData.twoBelowStandardDeviation));

  chart.highlightValueCircle
    .attr("cx",chart.scale(chart.highlightDatum));

  return chart;
}
