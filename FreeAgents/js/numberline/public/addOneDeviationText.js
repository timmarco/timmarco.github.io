/* jshint esversion:6 */
Numberline.prototype.addOneDeviationText = function() {
  const chart = this;

  let indicators = {};

  let highlightOneDeviation = () => {
    chart.oneStandardDeviationIndicator
      .attr("stroke",chart.styles.indicatorHighlightColor)
      .attr("stroke-width",chart.styles.meanIndicatorStrokeWidth);

    chart.oneDeviationText.negative
      .attr("fill",chart.styles.indicatorHighlightColor);

    chart.oneDeviationText.positive
      .attr("fill",chart.styles.indicatorHighlightColor);

    chart.tooltip
      .showOneStandardDeviation(chart.summaryData,chart.options.name);

  };

  let unhighlightOneDeviation = () => {
    chart.oneStandardDeviationIndicator
      .attr("stroke","none");

    chart.oneDeviationText.negative
      .attr("fill",chart.styles.indicatorFill);

    chart.oneDeviationText.positive
      .attr("fill",chart.styles.indicatorFill);

    chart.tooltip
      .hide();
  };

  indicators.negative = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.oneBelowStandardDeviation))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("-&sigma;")
    .on('mouseover',highlightOneDeviation)
    .on('mouseout',unhighlightOneDeviation);

  indicators.positive = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.oneAboveStandardDeviation))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("+&sigma;")
    .on('mouseover',highlightOneDeviation)
    .on('mouseout',unhighlightOneDeviation);

  return indicators;
};
