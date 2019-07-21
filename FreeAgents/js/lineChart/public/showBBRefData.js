/* jshint esversion:6 */
LineChart.prototype.showBBRefData = function() {
  const chart = this;

  chart.currentWARType = "bWar";
  chart.lineGenerator = chart.createLineGenerator();

  if(chart.currentView === "similarPlayers") {
    chart.playerLine
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.playerGroups
      .transition()
      .duration(300)
      .attr("transform",function(d) {
        return "translate("+chart.scales.x(+d.age)+","+chart.scales.y(d.bWar)+")";
      });

    chart.projectionLine
      .datum(chart.projection.bWarSimilarPlayersMean)
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.bWarSimilarPlayersMean)
      .transition()
      .duration(300)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });

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
        .attr("cy",(d) => { return chart.scales.y(d.bWar); });
    });

    chart.textLabels.forEach((label) => {
      if(label.fWar !== undefined) {
        label
          .updateText(label.bWar)
          .move({
            "x":chart.scales.x(label.age),
            "y":chart.scales.y(label.bWar)
          });
      }
    });


  }

  if(chart.currentView == "agingCurve") {
    chart.playerLine
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.playerGroups
      .transition()
      .duration(300)
      .attr("transform",function(d) {
        return "translate("+chart.scales.x(+d.age)+","+chart.scales.y(d.bWar)+")";
      });

    chart.projectionLine
      .datum(chart.projection.bWarAgingCurveProjection)
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.bWarAgingCurveProjection)
      .transition()
      .duration(300)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });

  }

  chart.updateXScale().updateYScale();

  return chart;
}
