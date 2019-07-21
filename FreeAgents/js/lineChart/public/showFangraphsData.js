/* jshint esversion:6 */
LineChart.prototype.showFangraphsData = function() {
  const chart = this;

  chart.currentWARType = "fWar";
  chart.lineGenerator = chart.createLineGenerator();

  chart.playerLine
    .transition()
    .duration(300)
    .attr("d",chart.lineGenerator);

  chart.playerGroups
    .transition()
    .duration(300)
    .attr("transform",function(d) {
      return "translate("+chart.scales.x(+d.age)+","+chart.scales.y(d.fWar)+")";
    });


  if(chart.currentView === "similarPlayers") {

    chart.projectionLine
      .datum(chart.projection.fWarSimilarPlayersMean)
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.fWarSimilarPlayersMean)
      .transition()
      .duration(300)
      .attr("transform",function(d) {
        return "translate("+chart.scales.x(+d.age)+","+chart.scales.y(d.fWar)+")";
      });

    let projectionAreaData = [];

    chart.projection.fWarSimilarPlayersMax.forEach((season,index) => {
      let values = {};
      values.age = season.age;
      values.max = season.fWar;
      values.min = chart.projection.fWarSimilarPlayersMin[index].fWar;
      projectionAreaData.push(values);
    });

    chart.projectionArea
      .datum(projectionAreaData)
      .transition()
      .duration(300)
      .attr("d",chart.areaGenerator);

    chart.compLines.forEach((line) => {
      line
        .transition()
        .duration(300)
        .attr("d",chart.lineGenerator);
    });

    chart.compCircles.forEach((circleSelection) => {
      circleSelection
        .transition()
        .duration(300)
        .attr("cx",(d) => { return chart.scales.x(d.age); })
        .attr("cy",(d) => { return chart.scales.y(d.fWar); });
    });

    chart.textLabels.forEach((label) => {
      if(label.fWar !== undefined) {
        label
          .updateText(label.fWar)
          .move({
            "x":chart.scales.x(label.age),
            "y":chart.scales.y(label.fWar)
          });
      }
    });


  }


  if(chart.currentView == "agingCurve") {

    chart.projectionLine
      .datum(chart.projection.fWarAgingCurveProjection)
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.fWarAgingCurveProjection)
      .transition()
      .duration(300)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });

  }

  chart.updateXScale().updateYScale();
  return chart;
}
