/* jshint esversion: 6 */
LineChart.prototype.addYAxis = function() {
  const chart = this;
  let yAxis;

  yAxis = chart.layers.axes
    .append("g")
    .attr("transform","translate("+chart.referencePoints.xMin+",0)")
    .call(d3.axisLeft(chart.scales.y))
    .attr("font-family",chart.styles.axisFontFamily)
    .attr("font-size",chart.styles.axisFontSize);

  return yAxis;
};
