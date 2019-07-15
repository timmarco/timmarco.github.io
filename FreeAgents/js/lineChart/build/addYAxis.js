/* jshint esversion: 6 */
LineChart.prototype.addYAxis = function() {
  const chart = this;
  let yAxis;

  let axis = d3.axisLeft(chart.scales.y).ticks(3);

  yAxis = chart.layers.axes
    .append("g")
    .attr("transform","translate("+chart.referencePoints.xMin+",0)")
    .call(axis)
    .attr("font-family",chart.styles.axisFontFamily)
    .attr("font-size",chart.styles.axisFontSize);

  return yAxis;
};
