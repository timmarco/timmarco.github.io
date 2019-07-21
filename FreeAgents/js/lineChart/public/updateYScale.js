/* jshint esversion:6 */
LineChart.prototype.updateYScale = function(newExtent) {
  const chart = this;

  let domain = chart.scales.y.domain();

  let allWar = [];

  // if(chart.compPlayers) {
  //   chart.compPlayers.forEach((player) => {
  //     player.bWar.forEach((season) => {
  //       allWar.push(+season.bWar);
  //     });
  //   });
  // }
  //
  //
  // if(chart.projection) {
  //   chart.projection.bWarAgingCurveProjection.map((a) => { return a.bWar}).forEach((value) => { allWar.push(value); });
  //   chart.projection.bWarSimilarPlayersMax.map((a) => { return a.bWar}).forEach((value) => { allWar.push(value); });
  //   chart.projection.bWarSimilarPlayersMin.map((a) => { return a.bWar}).forEach((value) => { allWar.push(value); });
  //   chart.playerData.map((a) => { return a.bWar}).forEach((value) => { allWar.push(value); });
  //
  //   chart.projection.fWarAgingCurveProjection.map((a) => { return a.fWar}).forEach((value) => { allWar.push(value); });
  //   chart.projection.fWarSimilarPlayersMax.map((a) => { return a.fWar}).forEach((value) => { allWar.push(value); });
  //   chart.projection.fWarSimilarPlayersMin.map((a) => { return a.fWar}).forEach((value) => { allWar.push(value); });
  //   chart.playerData.map((a) => { return a.fWar}).forEach((value) => { allWar.push(value); });
  //
  //   chart.zeroLine
  //     .attr("y1",chart.scales.y(0))
  //     .attr("y2",chart.scales.y(0));
  //
  //   chart.zeroText
  //     .attr("y",chart.scales.y(0) + 3);
  //
  //
  //   chart.starterLine
  //     .attr("y1",chart.scales.y(2))
  //     .attr("y2",chart.scales.y(2));
  //
  //   chart.starterText
  //     .attr("y",chart.scales.y(2) + 3);
  //
  //   if(d3.extent(allWar)[1] < 5) {
  //     chart.allStarLine
  //       .attr("display","none");
  //
  //     chart.allStarText
  //       .attr("display","none");
  //
  //   } else {
  //     chart.allStarLine
  //       .attr("display","block");
  //
  //     chart.allStarText
  //       .attr("display","block");
  //   }
  //
  //   chart.allStarLine
  //     .attr("y1",chart.scales.y(5))
  //     .attr("y2",chart.scales.y(5));
  //
  //   chart.allStarText
  //     .attr("y",chart.scales.y(5) + 3);
  //
  //   if(d3.extent(allWar)[1] < 8) {
  //     chart.mvpLine
  //       .attr("display","none");
  //
  //     chart.mvpText
  //       .attr("display","none");
  //   } else {
  //     chart.mvpLine
  //       .attr("display","block");
  //
  //     chart.mvpText
  //       .attr("display","block");
  //   }
  //
  //   chart.mvpLine
  //     .attr("y1",chart.scales.y(8))
  //     .attr("y2",chart.scales.y(8));
  //
  //   chart.mvpText
  //     .attr("y",chart.scales.y(8) + 3);
  //
  //     chart.playerLine
  //       .attr("d",chart.lineGenerator);
  //
  //
  // }
  //
  //
  //
  // chart.scales.y
  //   .domain(d3.extent(allWar));
  //
  // if(chart.projection !== undefined) {
  //
  //   chart.projectionLine
  //       .attr("d",chart.lineGenerator);
  //
  //   chart.projectionCircles
  //     .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });
  //
  //   chart.playerCircles
  //     .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });
  //
  // }
  //
  // if(chart.compLines) {
  //   chart.compLines.forEach((line) => {
  //     line
  //       .attr("d",chart.lineGenerator);
  //   });
  //
  //   chart.textLabels.forEach((label) => {
  //       label.move({
  //         "x":chart.scales.x(+label.values.x),
  //         "y":chart.scales.y(label.values.y)
  //       });
  //   });
  //
  //   chart.compCircles.forEach((circle) => {
  //     circle
  //       .attr("cy",(d) => { return chart.scales.y(d.bWar); });
  //   });
  // }
  //
  // chart.axes.y
  //   .call(d3.axisLeft(chart.scales.y).ticks(3));

  return chart;
};
