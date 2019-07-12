/* jshint esversion:6 */
LineChart.prototype.addYAxisTitle = function() {
  const chart = this;

  let title;

  title = chart.layers.axes
    .append("text")
    .attr("x",chart.margins.left / 2)
    .attr("y",chart.referencePoints.midlineY)
    .attr("font-size",chart.styles.axisTitleFontFamily)
    .attr("font-family",chart.styles.axisTitleFontFamily)
    .attr("fill",chart.styles.axisTitleFill)
    .attr("text-anchor","middle")
    .text("WAR");

  return title;

};
