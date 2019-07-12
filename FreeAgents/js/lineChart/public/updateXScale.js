/* jshint esversion:6 */

LineChart.prototype.updateXScale = function(newExtent) {
  const chart = this;

  let domain = chart.scales.x.domain();

  let allYears = [];

  chart.playerData.forEach((datum) => {
    allYears.push(datum.age);
  });

  Object.keys(chart.projections).forEach((projection) => {
    chart.projections[projection].forEach((datum) => {
      allYears.push(+datum.age);
    });
  });

  chart.compPlayers.forEach((player) => {
    player.bWar.forEach((season) => {
      allYears.push(+season.age);
    });
  });



  chart.scales.x
    .domain(d3.extent(allYears));

  chart.zeroLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.starterLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.allStarLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.mvpLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));


  chart.playerLine
    .attr("d",chart.lineGenerator);

  chart.meanProjectionLine
      .attr("d",chart.lineGenerator);

  chart.projectionArea
    .attr("d",chart.areaGenerator);

  chart.bottom25ProjectionLine
      .attr("d",chart.lineGenerator);

  chart.top25ProjectionLine
    .attr("d",chart.lineGenerator);


  chart.meanProjectionCircles
    .attr("cx",(d) => { return chart.scales.x(d.age); });

  chart.playerCircles
    .attr("cx",(d) => { return chart.scales.x(d.age); });

  chart.compLines.forEach((line) => {
    line
      .attr("d",chart.lineGenerator);
  });

  chart.textLabels.forEach((label) => {
      label.move({
        "x":chart.scales.x(+label.values.x),
        "y":chart.scales.y(label.values.y)
      });
  });

  chart.compCircles.forEach((circle) => {
    circle
      .attr("cx",(d) => { return chart.scales.x(d.age); });
  });

  chart.axes.x
    .call(d3.axisBottom(chart.scales.x));


  return chart;
};
