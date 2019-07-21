/* jshint esversion:6 */
LineChart.prototype.addProjection = function(projection) {
  const chart = this;
  chart.projection = projection;

  chart.projectionLine = chart.addProjectionLine();
  chart.projectionLine
    .datum(projection.bWarSimilarPlayersMean)
    .attr("display","block")
    .attr("d",chart.lineGenerator);


  chart.projectionCircles = chart.addProjectionCircles();

  chart.projectionCircles
    .data(projection.bWarSimilarPlayersMean)
    .attr("cx",(d) => { return chart.scales.x(d.age); })
    .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });

  chart.projectionArea = chart.addProjectionArea();
  let projectionAreaData = [];

  chart.projection.bWarSimilarPlayersMax.forEach((season,index) => {
    let values = {};
    values.age = season.age;
    values.max = season.bWar;
    values.min = chart.projection.bWarSimilarPlayersMin[index].bWar;
    projectionAreaData.push(values);
  });

  chart.projectionArea
    .datum(projectionAreaData)
    .attr("d",chart.areaGenerator);

  chart.updateXScale();
  chart.updateYScale();

  return chart;
};
