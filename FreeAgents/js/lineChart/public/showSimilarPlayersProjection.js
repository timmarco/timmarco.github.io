/* jshint esversion:6 */
LineChart.prototype.showAgingSimilarPlayersProjection = function() {
  const chart = this;

  chart.projectionArea
    .attr("display","block")
    .transition()
    .duration(250)
    .delay(125)
    .attr("opacity",0)
    .on("end",function() {
      d3.select(this)
        .attr("opacity",1);
    });

  chart.compLines.forEach((line,index) => {
    line
      .attr("display","block")
      .transition()
      .duration(250)
      .delay(125)
      .attr("opacity",0)
      .on("end",function() {
        d3.select(this)
          .attr("opacity",1);
      });
  });

  chart.compCircles.forEach((line,index) => {
    line
      .attr("display","block")
      .transition()
      .duration(250)
      .duration(125)
      .attr("opacity",0)
      .on("end",function() {
        d3.select(this)
          .attr("opacity",1);
      });
  });


  chart.projectionLine
    .datum(chart.projection.bWarSimilarPlayersMean)
    .transition()
    .duration(250)
    .attr("d",chart.lineGenerator);

  chart.projectionCircles
    .data(chart.projection.bWarSimilarPlayersMean)
    .transition()
    .duration(250)
    .attr("cx",(d) => { return chart.scales.x(d.age); })
    .attr("cy",(d) => { return chart.scales.y(d.bWar); });

  return chart;
};
