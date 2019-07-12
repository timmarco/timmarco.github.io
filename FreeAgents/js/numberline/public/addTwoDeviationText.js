/* jshint esversion:6 */
Numberline.prototype.addTwoDeviationText = function() {
  const chart = this;

  let indicators = {};


  let highlightTwoDeviations = () => {
    chart.twoStandardDeviationIndicators
      .attr("stroke",chart.styles.indicatorHighlightColor)
      .attr("stroke-width",chart.styles.meanIndicatorStrokeWidth);

    chart.twoDeviationText.negative
      .attr("fill",chart.styles.indicatorHighlightColor);

    chart.twoDeviationText.positive
      .attr("fill",chart.styles.indicatorHighlightColor);

    chart.tooltip
      .showTwoStandardDeviations(chart.summaryData,chart.options.name);

  };

  let unhighlightTwoDeviations = () => {
    chart.twoStandardDeviationIndicators
      .attr("stroke","none");

    chart.twoDeviationText.negative
      .attr("fill",chart.styles.indicatorFill);

    chart.twoDeviationText.positive
      .attr("fill",chart.styles.indicatorFill);

    chart.tooltip
      .hide();

  };

  indicators.negative = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.twoBelowStandardDeviation))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("-2&sigma;")
    .on('mouseover',highlightTwoDeviations)
    .on('mouseout',unhighlightTwoDeviations);

  indicators.positive = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("alignment-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.twoAboveStandardDeviation))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("+2&sigma;")
    .on('mouseover',highlightTwoDeviations)
    .on('mouseout',unhighlightTwoDeviations);

  return indicators;
};
