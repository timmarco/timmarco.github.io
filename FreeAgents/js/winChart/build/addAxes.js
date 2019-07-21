/* jshint esversion:6 */
WinChart.prototype.addAxes = function() {
  const chart = this;

  let axes = {};

  let xAxis = d3.axisBottom(chart.scales.x).ticks(2).tickFormat((d) => { return "$" + d + "MM"});

  axes.x = chart.layers.axes
  .append("g")
  .attr("transform","translate(0,"+(10 + chart.referencePoints.yMax)+")")
  .call(xAxis)
  .attr("opacity",1)
  .attr("font-family",chart.styles.axisFontFamily)
  .attr("font-size",chart.styles.axisFontSize);

  let yAxis = d3.axisLeft(chart.scales.y).ticks(2).tickFormat((d) => { return d;});
  axes.y = chart.layers.axes
    .append("g")
    .attr("transform","translate("+chart.referencePoints.xMin+",0)")
    .call(yAxis)
    .attr("opacity",1)
    .attr("font-family",chart.styles.axisFontFamily)
    .attr("font-size",chart.styles.axisFontSize);


  return axes;
}
