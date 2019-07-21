/* jshint esversion:6 */

LineChart.prototype.updateXScale = function(newExtent) {
  const chart = this;


  let domain = chart.scales.x.domain();

  let allYears = [];

  chart.playerData.forEach((datum) => {
    allYears.push(datum.age);
  });

  if(chart.compPlayers) {
    chart.compPlayers.forEach((player) => {
      player.bWar.forEach((season) => {
        allYears.push(+season.age);
      });
    });
  }

  if(chart.projection) {
    let years = chart.projection.bWarAgingCurveProjection.map((a) => { return a.age});
    years.forEach((year) => {
      allYears.push(+year);
    });
  }

  chart.scales.x
    .domain(d3.extent(allYears));

  chart.zeroLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.zeroText
    .attr("x",chart.scales.x(d3.extent(allYears)[1]) + 5)

  chart.starterLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.starterText
    .attr("x",chart.scales.x(d3.extent(allYears)[1]) + 5);

  chart.allStarLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.allStarText
    .attr("x",chart.scales.x(d3.extent(allYears)[1]) + 5);

  chart.mvpLine
    .attr("x1",chart.scales.x(d3.extent(allYears)[0]))
    .attr("x2",chart.scales.x(d3.extent(allYears)[1]));

  chart.mvpText
    .attr("x",chart.scales.x(d3.extent(allYears)[1]) + 5);


  chart.playerLine
    .attr("d",chart.lineGenerator);

  if(chart.projection !== undefined) {

    chart.projectionArea
      .attr("d",chart.areaGenerator);

    chart.projectionLine
        .attr("d",chart.lineGenerator);

    chart.projectionCircles
      .attr("transform",function(d) {
        return "translate("+chart.scales.x(d.age)+","+chart.scales.y(d[chart.currentWARType])+")";
      });
  }

  chart.playerGroups
    .attr("transform",function(d) {
      return "translate("+chart.scales.x(d.age)+","+chart.scales.y(d[chart.currentWARType])+")";
    });

  if(chart.compLines) {
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
  }

  chart.axes.x
    .call(d3.axisBottom(chart.scales.x).ticks(5));


  return chart;
};
