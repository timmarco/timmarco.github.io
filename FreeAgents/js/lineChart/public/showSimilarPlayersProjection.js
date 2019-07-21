/* jshint esversion:6 */
LineChart.prototype.showAgingSimilarPlayersProjection = function() {
  const chart = this;

  chart.currentView = "similarPlayers";

  if(chart.currentWARType == "bWar") {
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

    chart
      .updateXScale()
      .updateYScale();
  }

  if(chart.currentWARType == "fWar") {

    chart.projectionLine
      .datum(chart.projection.fWarSimilarPlayersMean)
      .transition()
      .duration(300)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.fWarSimilarPlayersMean)
      .transition()
      .duration(300)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d[chart.currentWARType]); });

    let projectionAreaData = [];

    chart.projection.fWarSimilarPlayersMax.forEach((season,index) => {
      let values = {};
      values.age = season.age;
      values.max = season.fWar;
      values.min = chart.projection.fWarSimilarPlayersMin[index].fWar;
      projectionAreaData.push(values);
    });

    chart.projectionArea
      .attr("display","block")
      .datum(projectionAreaData)
      .transition()
      .duration(300)
      .attr("opacity",1)
      .attr("d",chart.areaGenerator);


    chart.compLines.forEach((line) => {
      line
        .transition()
        .duration(300)
        .attr("opacity",1)
        .attr("display","block")
        .attr("d",chart.lineGenerator);
    });

    chart.compCircles.forEach((circleSelection) => {
      circleSelection
        .transition()
        .duration(300)
        .attr("opacity",1)
        .attr("display","block")
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

  chart.updateXScale().updateYScale();
  return chart;
};
