/* jshint esversion:6 */
LineChart.prototype.addTitle = function() {
  const chart = this;

  let title;

  title = chart.layers.title
    .append("text")
    .attr("x",chart.referencePoints.midlineX)
    .attr("y",chart.referencePoints.titleTopY)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","central")
    .attr("font-size",chart.styles.titleFontSize)
    .attr("font-family",chart.styles.titleFontFamily)
    .attr("fill",chart.styles.titleFontFill)
    .attr("font-weight",styles.titleFontWeight)
    .text("Projected WAR");

  return title;

};
