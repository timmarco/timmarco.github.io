/* jshint esversion: 6 */
LineChart.prototype.addXAxis = function() {
  const chart = this;

  let xAxis;

  xAxis = chart.layers.axes
    .append("g")
    .attr("transform","translate(0,"+chart.referencePoints.yMin+")")
    .call(d3.axisBottom(chart.scales.x))
    .attr("font-family",chart.styles.axisFontFamily)
    .attr("font-size",chart.styles.axisFontSize);
    

  return xAxis;
};
