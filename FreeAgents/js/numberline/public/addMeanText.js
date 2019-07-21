/* jshint esversion:6 */
Numberline.prototype.addMeanText = function() {
  const chart = this;

  let text;

  text = chart.layers.axis
    .append("text")
    .attr("text-anchor","middle")
    .attr("dominant-baseline","text-before-edge")
    .attr("x",chart.scale(chart.summaryData.mean))
    .attr("y",chart.referencePoints.bottomBaseline)
    .attr("font-family",chart.styles.indicatorFontFamily)
    .attr("font-size",chart.styles.indicatorFontSize)
    .attr("fill",chart.styles.indicatorFill)
    .attr("cursor","pointer")
    .html("&mu;")
    .on('mouseover',() => {
      chart.meanIndicator
        .attr("stroke-width",chart.styles.indicatorHighlightStrokeWidth)
        .attr("stroke",chart.styles.indicatorHighlightColor);

      chart.meanText
        .attr("fill",chart.styles.indicatorHighlightColor);

      chart.tooltip
        .showNumberlineMean(chart.summaryData,chart.options.name);

    })
    .on('mouseout',() => {
      chart.meanIndicator
        .attr("stroke-width",chart.styles.meanIndicatorStrokeWidth)
        .attr("stroke",chart.styles.meanIndicatorStroke);

      chart.meanText
        .attr("fill",chart.styles.indicatorFill);

      chart.tooltip
        .hide();
    });

  return text;
};
