/* jshint esversion:6 */
Numberline.prototype.addData = function(dataset) {
  const chart = this;
  let values = dataset.map((d) =>  {return d.value;});

  chart
    .updateScale(values);

  chart.summaryData = chart
    .calculateSummaryData(values);

  chart.twoStandardDeviationIndicators = chart
    .addTwoStandardDeviationIndicators();

  chart.oneStandardDeviationIndicator = chart
    .addOneStandardDeviationIndicator();

  chart.meanIndicator = chart
    .addmeanIndicator();

  chart.highlightCircle = chart
    .addHighlightCircle();

  chart.backgroundCircles = chart
    .addBackgroundCircles(dataset);

  chart.meanText = chart
    .addMeanText();

  chart.oneDeviationText = chart
    .addOneDeviationText();

  chart.twoDeviationText = chart
    .addTwoDeviationText();

  return chart;
};
