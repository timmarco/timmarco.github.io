/* jshint esversion:6*/
Numberline.prototype.calculateSummaryData = function(values) {
  let summaryData = {};

  summaryData.mean = d3.mean(values);
  summaryData.standardDeviation = d3.deviation(values);
  summaryData.oneAboveStandardDeviation = summaryData.mean + summaryData.standardDeviation;
  summaryData.twoAboveStandardDeviation = summaryData.mean + 2 * summaryData.standardDeviation;
  summaryData.oneBelowStandardDeviation = summaryData.mean - summaryData.standardDeviation;
  summaryData.twoBelowStandardDeviation = summaryData.mean - 2 * summaryData.standardDeviation;

  return summaryData;
};
