/* jshint esversion:6 */
LineChart.prototype.addXAxisTitle = function() {
  const chart = this;
  let title;

  title = chart.layers.axes
    .append("text")
    .attr("text-anchor","middle")
    .attr("x",chart.referencePoints.midlineX)
    .attr("y",chart.size.height)
    .attr("font-size",chart.styles.axisTitleFontFamily)
    .attr("font-family",chart.styles.axisTitleFontFamily)
    .attr("fill",chart.styles.axisTitleFill)
    .text("Year (Age)");

  return title;
};
