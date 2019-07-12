/* jshint esversion:6 */
LineChart.prototype.updateYScale = function(newExtent) {
  const chart = this;

  let domain = chart.scales.y.domain();

  let allWar = [];

  Object.keys(chart.projections).forEach((projection) => {
    chart.projections[projection].forEach((datum) => {
      allWar.push(+datum.bWar);
    });
  });

  chart.compPlayers.forEach((player) => {
    player.bWar.forEach((season) => {
      allWar.push(+season.bWar);
    });
  });

  chart.zeroLine
    .attr("y1",chart.scales.y(0))
    .attr("y2",chart.scales.y(0));


  chart.starterLine
    .attr("y1",chart.scales.y(2))
    .attr("y2",chart.scales.y(2));

  if(d3.extent(allWar)[1] < 5) {
    chart.allStarLine
      .attr("display","none");
  } else {
    chart.allStarLine
      .attr("display","block");
  }

  chart.allStarLine
    .attr("y1",chart.scales.y(5))
    .attr("y2",chart.scales.y(5));

  if(d3.extent(allWar)[1] < 8) {
    chart.mvpLine
      .attr("display","none");
  } else {
    chart.mvpLine
      .attr("display","block");
  }

  chart.mvpLine
    .attr("y1",chart.scales.y(8))
    .attr("y2",chart.scales.y(8));


  chart.scales.y
    .domain(d3.extent(allWar));

  chart.playerLine
    .attr("d",chart.lineGenerator);

  chart.meanProjectionLine
      .attr("d",chart.lineGenerator);

  chart.bottom25ProjectionLine
      .attr("d",chart.lineGenerator);

  chart.top25ProjectionLine
    .attr("d",chart.lineGenerator);

  chart.projectionArea
    .attr("d",chart.areaGenerator);

  chart.meanProjectionCircles
    .attr("cy",(d) => { return chart.scales.y(d.bWar); });

  chart.playerCircles
    .attr("cy",(d) => { return chart.scales.y(d.bWar); });

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
      .attr("cy",(d) => { return chart.scales.y(d.bWar); });
  });

  chart.axes.y
    .call(d3.axisLeft(chart.scales.y));

  return chart;
};
