/* jshint esversion:6 */
LineChart.prototype.showAgingCurveProjection = function() {
  const chart = this;

  chart.currentView = "agingCurve";

  if(chart.currentWARType === "bWar") {

    chart.projectionArea
      .attr("opacity",1)
      .transition()
      .duration(250)
      .attr("opacity",0)
      .on("end",function() {
        d3.select(this)
          .attr("display","none");
      });

    chart.compLines.forEach((line,index) => {
      line
        .attr("opacity",1)
        .transition()
        .duration(250)
        .attr("opacity",0)
        .on("end",function() {
          d3.select(this)
            .attr("display","none");
        });
    });

    chart.compCircles.forEach((line,index) => {
      line
        .attr("opacity",1)
        .transition()
        .duration(250)
        .attr("opacity",0)
        .on("end",function() {
          d3.select(this)
            .attr("display","none");
        });
    });


    chart.projectionLine
      .datum(chart.projection.bWarAgingCurveProjection)
      .transition()
      .duration(375)
      .delay(175)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.bWarAgingCurveProjection)
      .transition()
      .duration(375)
      .delay(175)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d.bWar); });
  }

  if(chart.currentWARType === "fWar") {

    chart.projectionArea
      .attr("opacity",1)
      .transition()
      .duration(250)
      .attr("opacity",0)
      .on("end",function() {
        d3.select(this)
          .attr("display","none");
      });

    chart.compLines.forEach((line,index) => {
      line
        .attr("opacity",1)
        .transition()
        .duration(250)
        .attr("opacity",0)
        .on("end",function() {
          d3.select(this)
            .attr("display","none");
        });
    });


    chart.compCircles.forEach((line,index) => {
      line
        .attr("opacity",1)
        .transition()
        .duration(250)
        .attr("opacity",0)
        .on("end",function() {
          d3.select(this)
            .attr("display","none");
        });
    });

    chart.projectionLine
      .datum(chart.projection.fWarAgingCurveProjection)
      .transition()
      .duration(375)
      .delay(175)
      .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .data(chart.projection.fWarAgingCurveProjection)
      .transition()
      .duration(375)
      .delay(175)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d.fWar); });

  }

  chart
    .updateXScale()
    .updateYScale();

  return chart;
};
